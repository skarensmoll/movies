import React, { useState } from "react";
import { Button } from "../UI";
import styles from "./RentalForm.module.scss";

const RentalForm = () => {
  const [renterName, setRenterName] = useState("");
  const [renterNameTouched, setRenterNameTouched] = useState(false);

  const [renterEmail, setRenterEmail] = useState("");
  const [renterEmailTouched, setRenterEmailTouched] = useState(false);

  const isValidRenterNameInput = !(renterName.trim() === "");

  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    renterEmail
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setRenterNameTouched(true);
    setRenterEmailTouched(true);
    if (!isValidRenterNameInput && !emailValid) return;

    setRenterName("");
    setRenterNameTouched(false);

    setRenterEmail("");
    setRenterEmailTouched(false);
  };

  const handleRenterChange = ({ target: { value } }) => {
    setRenterName(value);
  };
  const handleRenterBlur = (e) => {
    setRenterNameTouched(true);
  };

  const rentalFormClass = `${styles.RentalForm}`;

  const handleRenterEmailChange = ({ target: { value } }) => {
    setRenterEmail(value);
  };

  const handleRenterEmailBlur = ({ target: { value } }) => {
    setRenterEmailTouched(true);
  };

  return (
    <form className={rentalFormClass} onSubmit={handleSubmit}>
      <div
        className={`${
          !isValidRenterNameInput &&
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
          onChange={handleRenterChange}
          onBlur={handleRenterBlur}
        />
        <p>Please enter a name</p>
      </div>

      <div
        className={`
        ${(!emailValid && renterEmailTouched) &&
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
