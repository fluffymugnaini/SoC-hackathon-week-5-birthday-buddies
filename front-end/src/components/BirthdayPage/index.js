import React, { useEffect, useState } from 'react';
import dateFormat from '../../libs/dateFormat';
import { BACKEND_URL_Birthdays, months } from '../../libs/dependencies';
import Button from '../MonthButton';
import css from './BirthdayPage.module.css';

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
    <div className={css.container}>
      <div className={css.headingAndButton}>
        <h2> Find your birthday month buddies!</h2>
        {months.map((month, i) => (
          <Button key={i} month={month} setCurrentMonth={setCurrentMonth} />
        ))}
      </div>
      <ul className={css.birthdayBuddiesList}>
        {birthday &&
          birthday.map((person) => (
            <li className={css.items}>
              {person.fullName}{" "}
              <span className={css.birthday}>
                {" "}
                {dateFormat(person.day)} of {person.month}{" "}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BirthdayPage;
