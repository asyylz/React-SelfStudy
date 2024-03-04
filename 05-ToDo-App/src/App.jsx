import Days from "./components/Days";
import "./App.css";

function App() {

  
const week = [];
// Get the current date
const currentDate = new Date();

// Loop through the days of the week
for (let i = 0; i < 7; i++) {
    // Calculate the date for the current day of the week
    const dateForDay = new Date(currentDate);
    dateForDay.setDate(currentDate.getDate() + i);

    // Get the day, month, and year
    const day = dateForDay.getDate();
    const month = dateForDay.toLocaleString('default', { month: 'long' });
    const year = dateForDay.getFullYear();

    // Get the name of the day (e.g., Monday, Tuesday, etc.)
    const dayName = dateForDay.toLocaleString('default', { weekday: 'long' });

    // Create the formatted date string
    const formattedDate = `${day} ${month} ${year} ${dayName}`;

    // Check if the current day is the current day of the week
    const isCurrent = i === 0;

    // Push the day object to the week array
    week.push({ date: formattedDate, current: isCurrent });
}

console.log(week);


  return
  <Days  />;
}

export default App;
