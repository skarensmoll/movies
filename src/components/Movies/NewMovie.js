import { Button, Input } from '../UI';
import styles from './Form.module.scss';
import React, { useRef } from 'react'

const Form = ({ onSaveMovies }) => {
  const idMovieRef = useRef();
  const nameMovieRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(onSaveMovies)
    onSaveMovies({
      id: idMovieRef.current.value,
      name: nameMovieRef.current.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <Input id="idMovie" label="Ref. Movie" ref={idMovieRef} />
      <Input id="name" label="Name Movie." ref={nameMovieRef} />
      <div>
        <Button type="submit">
          Save Movie
        </Button>
      </div>
    </form>
  )
}

export default Form;