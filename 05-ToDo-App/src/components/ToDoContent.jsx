import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function TodoContent({ weekData, setWeekData, selectedDay }) {
  console.log(weekData);
  // Using useLocalStorage hook to manage weekData in local storage
  // const [storedWeekData, setStoredWeekData] = useLocalStorage(
  //   "weekData",
  //   weekData
  // );
  const [inputValue, setInputValue] = useState("");

  function handleToDoContent() {
    if (inputValue.trim() === "") {
      return;
    }
    // Update the todos in the selected day
    const updatedWeekData = weekData.map((day) => {
      if (day.date === selectedDay) {
        const todoIdCounter = day.todos ? day.todos.length + 1 : 1;
        const updatedDay = {
          ...day,
          todos: day.todos
            ? [...day.todos, { id: todoIdCounter, description: inputValue }]
            : [{ id: todoIdCounter, description: inputValue }],
        };
        return updatedDay;
      }
      return day;
    });
    //setStoredWeekData(updatedWeekData);
    // Update the weekData state using the setter function
    setWeekData(updatedWeekData);
    // Clear the input value after adding the todo
    setInputValue("");
  }
  return (
    <section className="content">
      {weekData.map((day, i) => (
        <div className="item" id={`content-${i + 1}`} key={i}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="todo-content"
            placeholder="Enter your todo here..."
            value={inputValue}
            id="content-input"
          />
          <button onClick={handleToDoContent} role="button" className="btnAdd">
            Add ToDo
          </button>
          <div className="todo-wrapper-container">
            {day.date === selectedDay && (
              <div>
                {day.todos &&
                  day.todos.map((todo, j) => (
                    <p key={j}>
                      {j + 1}--{todo.description}
                    </p>
                  ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>

    // <div className="content-container">
    //   <input
    //     onChange={(e) => setInputValue(e.target.value)}
    //     type="text"
    //     name="todo-content"
    //     placeholder="Enter your todo here..."
    //     value={inputValue}
    //   />
    //   <button onClick={handleToDoContent} className="btnAdd">
    //     Add ToDo
    //   </button>
    //   <div className="todo-wrapper-container">
    //     {/* Render todos for the selected day */}
    //     {storedWeekData.map((day, i) => {
    //       if (day.date === selectedDay) {
    //         return (
    //           <div key={i}>
    //             <ul>
    //               {day.todos &&
    //                 day.todos.map((todo, j) => (
    //                   <li key={j}>{todo.description}</li>
    //                 ))}
    //             </ul>
    //           </div>
    //         );
    //       }
    //       return null; // Render nothing if it's not the selected day
    //     })}
    //   </div>
    // </div>
  );
}
