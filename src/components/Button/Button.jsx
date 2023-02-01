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
