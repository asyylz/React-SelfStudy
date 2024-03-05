import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoContent from "./ToDoContent";
import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from "react";

export default function WeekDayTabs() {
  //const [weekLocal, setWeekLocal] = useLocalStorage("weekInfo", []);
  const [weekData, setWeekData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

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

  const handleTabSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="card tabs">
      {weekData.map((day, index) => (
        <>
          <input
            id={`tab-${index + 1}`}
            type="radio"
            className="tab tab-selector"
            checked={day.date === selectedDate ? "checked" : ""}
            name="tab"
            onChange={() => handleTabSelect(day.date)}
          />
          <label
            htmlFor={`tab-${index + 1}`}
            className="tab tab-primary"
            onSelect={() => handleTabSelect(day.date)}
          >
            {day.date}
          </label>
        </>
      ))}
      <div className="tabsShadow"></div>
      <div className="glider"></div>
      <TodoContent
        weekData={weekData}
        setWeekData={setWeekData}
        selectedDay={selectedDate}
      />
    </div>
  );

  // <Tabs
  //   defaultActiveKey="profile"
  //   id="justify-tab-example"
  //   className="tabs-container mb-4"
  //   justify
  //   onSelect={handleTabSelect}
  // >
  //   {weekData.map((day, index) => (
  //     <Tab
  //       key={index}
  //       eventKey={day.date}
  //       title={day.date}
  //       style={{ backgroundColor: day.current ? "red" : "white" }}
  //     >
  //       <TodoContent
  //         weekData={weekData}
  //         setWeekData={setWeekData}
  //         selectedDay={selectedDate}
  //       />
  //     </Tab>
  //   ))}
  // </Tabs>
}
