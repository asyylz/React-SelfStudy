
export default function EditableTodoInput({ editingTodoId, todo,setEditingTodoId,j }) {
  //const [editingTodoId, setEditingTodoId] = useState(null);
  //const [isEditing, setIsEditing] = useState(false);
console.log(todo)
  function handleEditTodoDescription(todoId, newValue) {
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const updatedTodos = day.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              description: newValue,
            };
          }
          return todo;
        });
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    setStoredWeekData(updatedWeekData);
  }

  return (
    <>
      {editingTodoId === todo.id ? (
        <input
          //id={`edit-input-${todo.id}`}
          id="edit-input"
          value={todo.description}
          onChange={(e) => handleEditTodoDescription(todo.id, e.target.value)}
          onBlur={() => setEditingTodoId(null)}
        />
      ) : (
        <p className={todo.isDone ? "done" : ""}>
          {j + 1}--{todo.description}
        </p>
      )}
    </>
  );
}
