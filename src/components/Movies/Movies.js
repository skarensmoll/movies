import React from 'react';
import styles from './movies.module.scss'

const Movies = ({ list }) => {
  return (
    <ul className={styles.Movies}>
      {list.map(item => {
        return (
          <li key={item.id} className={styles.Movies__card}>
            <h3>{item.name}</h3>
            <span>{item.id}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default Movies;