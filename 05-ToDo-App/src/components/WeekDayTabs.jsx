import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoContent from "./ToDoContent";
import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from "react";

export default function WeekDayTabs() {
  //const [weekLocal, setWeekLocal] = useLocalStorage("weekInfo", []);
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
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
      week.push({ date: formattedDate, current: isCurrent });
    }
    setWeekData(week);
  }, []); // Run only once on component mount

  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="tabs-container mb-4"
      justify
    >
      {weekData.map((day, index) => (
        <Tab
          key={index}
          eventKey={day.date}
          title={day.date}
          style={{ backgroundColor: day.current ? "red" : "white" }}
        >
          <TodoContent
            weekData={weekData}
            setWeekData={setWeekData}
            selectedDay={day.date}
          />
        </Tab>
      ))}
    </Tabs>
  );
}
