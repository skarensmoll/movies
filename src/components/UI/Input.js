import React from 'react';
import styles from './Input.module.scss';

export const Input = React.forwardRef(({ type, id, label }, ref) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} ref={ref} name={id} />
    </div>
  )
});