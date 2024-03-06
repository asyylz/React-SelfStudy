import { useState } from "react";
import DisplayToDoContent from "../DisplayToDoContent";
export default function WeekDisplay({
  weekData,
  storedWeekData,
  setStoredWeekData,
}) {
  const [selectedDate, setSelectedDate] = useState("");

  function handleTabSelect(selectedDay, index) {
    if (index === 0) {
    }
    setSelectedDate(selectedDay);
  }

  return (
    <div className="card tabs">
      {storedWeekData.map((day, index) => (
        <>
          <input
            id={`tab-${index + 1}`}
            type="radio"
            className="tab tab-selector"
            name="tab"
            onChange={() => handleTabSelect(day.date)}
          />
          <label
            htmlFor={`tab-${index + 1}`}
            className="tab tab-primary"
            onSelect={() => handleTabSelect(day.date, index)}
            style={{
              border:
                day.status === "current"
                  ? "2px solid #48ff00"
                  : day.status === "past"
                  ? "2px solid #ff0000"
                  : "2px solid #002bff",
            }}
          >
            {day.date}
          </label>
        </>
      ))}
      <div className="tabsShadow"></div>
      <div className="glider"></div>
      <DisplayToDoContent
        setStoredWeekData={setStoredWeekData}
        storedWeekData={storedWeekData}
        selectedDay={selectedDate}
      />
    </div>
  );
}
