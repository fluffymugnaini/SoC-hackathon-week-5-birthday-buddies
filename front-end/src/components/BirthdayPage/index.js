import React, {useEffect, useState} from "react";
import BACKEND_URL_Birthdays from '../../libs/config';
import dateFormat from '../../libs/dateFormat';
import Button from '../Button';

function BirthdayPage({dispatch, birthday}) {
const [month, setMonth] = useState("")

useEffect(() => {
    async function getBirthdays(){
        let response = await fetch(`${BACKEND_URL_Birthdays}/${month}`);
        let data = await response.json();
        dispatch({type: "BIRTHDAYS", payload: data});
        console.log(birthday);
    }
    getBirthdays();
}, [month]);

function birthdayByMonth(newMonth){
setMonth(newMonth);
}

    return (
      <div class="container">
        <h2> Find your birthday month buddies!</h2>
        {/* <Button/> */}

        <button
          onClick={() => birthdayByMonth("January")}
          class="btn month small rotate-left"
        >
          January
        </button>
        <button onClick={() => birthdayByMonth("February")} class="btn month">
          February
        </button>
        <button
          onClick={() => birthdayByMonth("March")}
          class="btn month big rotate-left"
        >
          March
        </button>
        <button
          onClick={() => birthdayByMonth("April")}
          class="btn month big"
        >
          April
        </button>
        <button
          onClick={() => birthdayByMonth("May")}
          class="btn month big"
        >
          May
        </button>
        <button
          onClick={() => birthdayByMonth("June")}
          class="btn month rotate-left"
        >
          June
        </button>
        <button
          onClick={() => birthdayByMonth("July")}
          class="btn month big"
        >
          July
        </button>
        <button
          onClick={() => birthdayByMonth("August")}
          class="btn month rotate-right"
        >
          August
        </button>
        <button
          onClick={() => birthdayByMonth("September")}
          class="btn month small"
        >
          September
        </button>
        <button
          onClick={() => birthdayByMonth("October")}
          class="btn month big"
        >
          October
        </button>
        <button
          onClick={() => birthdayByMonth("November")}
          class="btn month rotate-left"
        >
          November
        </button>
        <button
          onClick={() => birthdayByMonth("December")}
          class="btn month big"
        >
          December
        </button>
        <ul class="birthday-buddies">
          { birthday && (
                birthday.map(person => <li>{person.fullName} {dateFormat(person.day)} of {person.month}</li>)
    )}
        </ul>
      </div>
    );
}

export default BirthdayPage;