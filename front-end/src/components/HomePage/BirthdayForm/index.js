import React, { useState } from 'react';
import { months, BACKEND_URL_Birthdays } from '../../../libs/dependencies';
import css from './BirthdayForm.module.css';

function BirthdayForm() {
  const [birthdayInfo, setBirthdayInfo] = useState({});

 async function postUser() {
   const res = await fetch(`${BACKEND_URL_Birthdays}`, {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(birthdayInfo), //turns body object into json
   });
 }

  const onChange = (e, field) =>
    setBirthdayInfo({ ...birthdayInfo, [field]: e.target.value });

  return (
    <form id='input-form'>
      <label>
        Enter name:
        <input
          type='text'
          name='fullName'
          onChange={(e) => onChange(e, 'fullName')}
        />
      </label>

      <label>
        Day of Birth:
        <input
          type='number'
          name='day'
          min='1'
          max='31'
          onChange={(e) => onChange(e, 'day')}
        />
      </label>
      <label>
        Month of Birthday:
        <select name='Month' onChange={(e) => onChange(e, 'month')}>
          {months.map((month, i) => <option>{month}</option>)}
        </select>
      </label>
      <button type='submit' id='submit-button' onClick={postUser}>
        Submit
      </button>
    </form>
  );
}

export default BirthdayForm;
