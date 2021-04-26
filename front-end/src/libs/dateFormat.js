function dateFormat(day) {
  const dayStr = day.toString();
  let dayEnd = "";
  switch (dayStr[day.length - 1]) {
    case 1:
      dayEnd = "st";
      break;
    case 2:
      dayEnd = "nd";
      break;
    case 3:
      dayEnd = "rd";
      break;
    default:
      dayEnd = "th";
  }

  return dayStr + dayEnd;
}

export default dateFormat;
