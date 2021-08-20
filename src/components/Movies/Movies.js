import React from 'react';
import styles from './movies.module.scss'

const Movies = ({ list }) => {
  return (
    <ul className={styles.Movies}>
      {list.map(item => {
        return (
          <li className={styles.Movies__card}>
            <h3>{item.title}</h3>
            <span>{item.episode_id}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default Movies;