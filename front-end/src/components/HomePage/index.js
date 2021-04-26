import React from "react";
import BirthdayForm from './BirthdayForm';

function HomePage() {
    return (
        <div class="form-container">
            <div class="title">
                <h1>BIRTHDAY BUDDIES</h1>
                <h2>Because no one wants to spend their birthday alone</h2>
            </div>
           <BirthdayForm/>
        </div>
    );
}

export default HomePage;