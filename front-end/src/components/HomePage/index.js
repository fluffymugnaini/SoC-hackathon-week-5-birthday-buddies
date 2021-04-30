import React from 'react';
import { Link } from 'react-router-dom';
import BirthdayForm from './BirthdayForm';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.formContainer}>
      <div className={css.title}>
        <h1>BIRTHDAY BUDDIES</h1>
        <h2>Because no one wants to spend their birthday alone</h2>
      </div>
      <BirthdayForm />

      <Link to='/birthdays'>
        <button className="btn" >View Birthdays</button>
      </Link>
    </div>
  );
}

export default HomePage;
