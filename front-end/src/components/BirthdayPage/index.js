import React, {useEffect} from "react";
import BACKEND_URL_Birthdays from '../../libs/config';

function BirthdayPage({dispatch, birthday}) {

useEffect(() => {
    async function getBirthdays(){
        let response = await fetch(`${BACKEND_URL_Birthdays}`);
        let data = await response.json();
        await dispatch({type: "BIRTHDAYS", payload: data});
        console.log(birthday);
    }
    getBirthdays();
}, []);

    return (
         <div class="container">
            <h2> Find your birthday month buddies!</h2>
            
            <button class="btn month small rotate-left">January</button>
            <button class="btn month">February</button>
            <button class="btn month big rotate-left">March</button>
            <button class="btn month big">April</button>
            <button class="btn month big">May</button>
            <button class="btn month rotate-left">June</button>
            <button class="btn month big">July</button>
            <button class="btn month rotate-right">August</button>
            <button class="btn month small">September</button>
            <button class="btn month big">October</button>
            <button class="btn month rotate-left">November</button>
            <button class="btn month big">December</button>
        <ul class="birthday-buddies">
            {/* { birthday && (
                birthday.map(person => <li>{person.fullName}</li>)
    )} */}
        </ul>
    </div>
    )
}

export default BirthdayPage;