import { useState } from "react";

export default function DisplayToDoContent({
  storedWeekData,
  setStoredWeekData,
  selectedDay,
}) {
  const [input, setInput] = useState("");

  function handleAddBtn() {
    if (!input || input.trim() === "") {
      return;
    }
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const todoIdCounter = day.todos ? day.todos.length + 1 : 1;
        const updatedTodos = [
          ...(day.todos || []),
          { id: todoIdCounter, description: input },
        ];
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    console.log(updatedWeekData);
    setStoredWeekData(updatedWeekData);
    setInput("");
  }

  return (
    <section className="content">
      {storedWeekData.map((day, i) => (
        <div className="item" id={`content-${i + 1}`} key={i}>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="todo-content"
            placeholder="Enter your todo here..."
            value={input}
            id="content-input"
          />
          <button onClick={handleAddBtn} role="button" className="btnAdd">
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
  );
}
