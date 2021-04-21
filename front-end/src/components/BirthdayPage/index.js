import React from "react";
import BACKEND_URL_Birthdays from '../../libs/config';

function BirthdayPage() {

useEffect(() => {
    async function getBirthdays(){
        let response = await fetch(`${BACKEND_URL_Birthdays}`);
        let data = await response.json();
        dispatchEvent({type: "BIRTHDAYS", payload: data});
        console.log(data);
    }
    getBirthdays();
}, []);

    return (
         <div class="container">
            <h2> Find your birthday month buddies!</h2>
            {/* <!-- classes on buttons for css --> */}
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
            {/* <!-- This list will store data returned from GET request to API --> */}
        </ul>
    </div>
    )
}

export default BirthdayPage;