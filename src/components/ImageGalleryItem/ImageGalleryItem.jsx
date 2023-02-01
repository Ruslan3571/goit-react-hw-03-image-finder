import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;
    return (
      <li onClick={this.handleToggleModal} className={s.imageGalleryItem}>
        <img
          className={s.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </li>
    );
  }
}
