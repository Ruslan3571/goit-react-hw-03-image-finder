import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = element => {
    if (element.code === 'Escape' || element.currenTarget !== element.target) {
      this.props.closeModal();
      return;
    }
  };

  render() {
    const { tags, modalImg } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.closeModal}>
        <div className={s.modal}>
          <img src={modalImg} alt={tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
