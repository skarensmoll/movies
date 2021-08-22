import React from 'react';
import styles from './Button.module.scss';

const Button = React.memo(({ children, type, className, onClick }) => {
  const classList = `${styles.Button} ${className}`;
  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
});

export {Button};