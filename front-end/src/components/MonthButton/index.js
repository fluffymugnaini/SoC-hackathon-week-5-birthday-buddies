import { getRandomButtonClasses } from '../../libs/dependencies';
import './MonthButton.css';

function MonthButton({ month, setCurrentMonth }) {
  const randomClassList = getRandomButtonClasses();
  const onClick = () => setCurrentMonth(month);
  console.log(randomClassList)
  return (
    <button className={`month-btn ${randomClassList}`} onClick={onClick}>
      {month}
    </button>
  );
}

export default MonthButton;
