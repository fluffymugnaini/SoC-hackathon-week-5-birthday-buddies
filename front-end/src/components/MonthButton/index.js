import { getRandomButtonClasses } from '../../libs/dependencies';
import './MonthButton.css';

function MonthButton({ month, setCurrentMonth }) {
  const randomClassList = getRandomButtonClasses();
  const onClick = () => setCurrentMonth(month);

  return (
    <button className={`btn ${randomClassList}`} onClick={onClick}>
      {month}
    </button>
  );
}

export default MonthButton;
