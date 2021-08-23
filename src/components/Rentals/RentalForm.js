import React, { useState } from "react";
import { Button } from "../UI";
import styles from "./RentalForm.module.scss";

import useInput from '../../hooks/useInput';

const RentalForm = () => {

  const [
    renterName,
    renterNameValid,
    renterNameTouched,
    handleRenterNameBlur,
    handleRenterNameChange,
    resetName,

  ] = useInput('', (value) => !(value.trim() === ""));


  const [
    renterEmail,
    renterEmailValid,
    renterEmailTouched,
    handleRenterEmailBlur,
    handleRenterEmailChange,
    resetEmail,
  ] = useInput('', (value)=> {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      value
    );
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!renterNameValid && !renterEmailValid) return;

    resetName();
    resetEmail();

  };

  const rentalFormClass = `${styles.RentalForm}`;


  return (
    <form className={rentalFormClass} onSubmit={handleSubmit}>
      <div
        className={`${
          !renterNameValid &&
          renterNameTouched &&
          styles["RentalForm--invalid"]
        }`}
      >
        <label htmlFor="renterName">Renter Name:</label>
        <input
          id="renterName"
          name="renterName"
          type="text"
          value={renterName}
          onChange={handleRenterNameChange}
          onBlur={handleRenterNameBlur}
        />
        <p>Please enter a name</p>
      </div>

      <div
        className={`
        ${(!renterEmailValid && renterEmailTouched) &&
          styles["RentalForm--invalid"]}
        `}
      >
        <label htmlFor="RenterName">Renter Email</label>
        <input
          id="renterEmail"
          name="renterEmail"
          value={renterEmail}
          onChange={handleRenterEmailChange}
          onBlur={handleRenterEmailBlur}
        />
        <p >Please enter a valid email</p>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RentalForm;
