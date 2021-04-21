import React from "react";

function HomePage() {
    return (
        <div class="form-container">
            <div class="title">
                <h1>BIRTHDAY BUDDIES</h1>
                <h2>Because no one wants to spend their birthday alone</h2>
            </div>
            <form id="input-form">
                <label>
                    Enter name
                    <input type="text" name="fullName"/>
                </label>
              
                <label>
                    Day of Birth
                    <input type="number" name="day" min = "1" max = "31"/>
                </label>
                <label>
                    Month of Birthday
                    <select name = "Month">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </label>
                <button type="submit" id="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default HomePage;