import React, { useState } from 'react';
import { months } from '../../../libs/dependencies';

function BirthdayForm() {
  const [birthdayInfo, setBirthdayInfo] = useState({});

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
      <button type='submit' id='submit-button'>
        Submit
      </button>
    </form>
  );
}

export default BirthdayForm;
