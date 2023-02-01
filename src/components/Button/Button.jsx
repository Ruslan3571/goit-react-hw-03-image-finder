import PropTypes from 'prop-types';
import s from './Button.module.css';

export function Button({ onShow }) {
  return (
    <div className={s.buttonBlock}>
      <button className={s.button} onClick={onShow} type="button">
        Load more
      </button>
    </div>
  );
}
Button.propTypes = {
  onShow: PropTypes.func,
};
