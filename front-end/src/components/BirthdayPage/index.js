import React, { useEffect, useState } from 'react';
import dateFormat from '../../libs/dateFormat';
import { BACKEND_URL_Birthdays, months } from '../../libs/dependencies';
import Button from '../MonthButton';

function BirthdayPage({ dispatch, birthday }) {
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(
    () => {
      async function getBirthdays() {
        let response = await fetch(`${BACKEND_URL_Birthdays}/${currentMonth}`);
        let data = await response.json();
        dispatch({ type: 'BIRTHDAYS', payload: data });
        console.log(birthday);
      }
      getBirthdays();
    },
    [currentMonth]
  );

  return (
    <div class='container'>
      <h2> Find your birthday month buddies!</h2>
      {months.map((month, i) => (
        <Button key={i} month={month} setCurrentMonth={setCurrentMonth} />
      ))}
      <ul class='birthday-buddies'>
        {birthday &&
          birthday.map((person) => (
            <li>
              {person.fullName} {dateFormat(person.day)} of {person.month}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BirthdayPage;
