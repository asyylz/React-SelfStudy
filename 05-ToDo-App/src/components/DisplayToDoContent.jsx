import { useState } from "react";
import EditableTodoInput from "./EditableTodoInput";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

export default function DisplayToDoContent({
  storedWeekData,
  setStoredWeekData,
  selectedDay,
}) {
  const [input, setInput] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  //const [isEditing, setIsEditing] = useState(false);

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
                      <EditableTodoInput
                        todo={todo}
                        editingTodoId={editingTodoId}
                        setEditingTodoId={setEditingTodoId}
                        j={j}
                        storedWeekData={storedWeekData}
                        setStoredWeekData={setStoredWeekData}
                        selectedDay={selectedDay}
                      />

                      <RiEdit2Line
                        size={50}
                        style={{ cursor: "pointer" }}
                        //color="#ff7300"
                        color={editingTodoId ? "red" : "#ff7300"}
                        onClick={() => setEditingTodoId(todo.id)}
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
