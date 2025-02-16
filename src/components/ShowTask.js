export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleDelete = (taskId) => {
    const updatedTaskList = tasklist.filter((x) => x.id !== taskId);
    setTasklist(updatedTaskList);
  };

  const handleEdit = (taskId) => {
    setTask(tasklist.find((x) => x.id === taskId));
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
