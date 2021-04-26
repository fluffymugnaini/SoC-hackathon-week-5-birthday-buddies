const BACKEND_URL_Birthdays = 'https://birthdays-cohort-5.herokuapp.com/users';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getRandomButtonClasses = () => {
  const classes = [];
  //random size
  classes.push(Math.random() >= 0.5 ? 'big' : 'small');
  //random tilt
  classes.push(Math.random() >= 0.5 ? 'rotate-left' : 'rotate-right');

  return classes.join(" ");
};

export { BACKEND_URL_Birthdays, months, getRandomButtonClasses };
