import { useState } from "react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

export default function DisplayToDoContent({
  storedWeekData,
  setStoredWeekData,
  selectedDay,
}) {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleAddBtn() {
    if (!input || input.trim() === "") {
      return;
    }
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const todoIdCounter = day.todos ? day.todos.length + 1 : 1;
        const updatedTodos = [
          ...(day.todos || []),
          { id: todoIdCounter, description: input, isDone: false },
        ];
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    console.log(updatedWeekData);
    setStoredWeekData(updatedWeekData);
    setInput("");
  }

  function handleDeleteBtn(todoId) {
    console.log("delete");
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const updatedTodos = day.todos.filter((todo) => todo.id !== todoId);
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    console.log(updatedWeekData);
    setStoredWeekData(updatedWeekData);
  }

  function handleIsDoneBtn(todoId) {
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const updatedTodos = day.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        });
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    console.log(updatedWeekData);
    setStoredWeekData(updatedWeekData);
  }
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <section className="content">
      {storedWeekData.map((day, i) => (
        <div
          className={day.date === selectedDay ? "item checked" : "item"}
          id={`content-${i + 1}`}
          key={i}
        >
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
          <div className="todo-wrapper-container" style={{ marginTop: "1rem" }}>
            {day.date === selectedDay && (
              <div>
                {day.todos &&
                  day.todos.map((todo, j) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="checkbox-wrapper-57">
                        <label className="container">
                          <input
                            type="checkbox"
                            onChange={() => handleIsDoneBtn(todo.id)}
                            checked={todo.isDone}
                          />
                          <div className="checkmark"></div>
                        </label>
                      </div>
                      {isEditing ? (
                        <>
                          <input
                            id="edit-input"
                            value={`${j + 1}--${todo.description}`}
                            onChange={(e) => handleInputChange(e)}
                          />
                          {/* Edit icon is not rendered while editing */}
                        </>
                      ) : (
                        <>
                          <p key={j} className={todo.isDone ? "done" : ""}>
                            {j + 1}--{todo.description}
                          </p>
                        </>
                      )}
                      {/* Render edit and delete icons when not editing */}
                      <RiEdit2Line
                        size={50}
                        style={{ cursor: "pointer" }}
                        color="#ff7300"
                        onClick={() => setIsEditing(!isEditing)}
                      />
                      <RiDeleteBinLine
                        size={50}
                        style={{ cursor: "pointer" }}
                        color="#ff7300"
                        onClick={() => handleDeleteBtn(todo.id)}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
