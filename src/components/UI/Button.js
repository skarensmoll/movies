import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ children, type, className, onClick }) => {
  const classList = `${styles.Button} ${className}`;
  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}
