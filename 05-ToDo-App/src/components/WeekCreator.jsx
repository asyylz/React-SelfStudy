import WeekManager from "./WeekManager";

export default function WeekCreator() {
  // Get the current date
  const currentDate = new Date();
  // Create an array to hold the days of the week
  const week = [];
  // Loop through the days of the week
  for (let i = 0; i < 7; i++) {
    // Calculate the date for the current day of the week
    const dateForDay = new Date(currentDate);
    dateForDay.setDate(currentDate.getDate() + i);
    // Get the day, month, and year
    const day = dateForDay.getDate();
    const month = dateForDay.toLocaleString("default", { month: "long" });
    const year = dateForDay.getFullYear();
    // Get the name of the day (e.g., Monday, Tuesday, etc.)
    const dayName = dateForDay.toLocaleString("default", { weekday: "long" });
    // Create the formatted date string
    const formattedDate = `${day} ${month} ${year} ${dayName}`;
    // Check if the current day is the current day of the week
    const isCurrent = i === 0;
    // Push the day object to the week array
    week.push({ date: formattedDate, current: isCurrent, todos: [] });
  }

  return <WeekManager weekData={week} />;
}
