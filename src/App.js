import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "Pay Bills" },
    { id: 2, todo: "Meet George" },
    { id: 3, todo: "Buy eggs" },
    { id: 4, todo: "Read a book" },
    { id: 5, todo: "Organize office" },
  ]);

  const handleAdd = (e) => {
    if (todo === "") {
      alert("You must write something!");
    } else {
      setTodos([...todos,{ id: `${todo}-${Date.now()}`, todo }]);
      setTodo("");
    }
  };

  const handleClose = (id) => {
    const delTodo = todos.filter((t) => t.id !== id);
    setTodos(delTodo);
  };

  const handleChecked = (e) => {
    e.target.classList.toggle("checked");
  };
  return (
    <>
      <div className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <span onClick={handleAdd} className="addBtn">
          Add
        </span>
      </div>

      <div>
        {todos.map((t) => (
          <ul key={t.id} onClick={handleChecked}>
            <li className="todo">
              {t.todo}
              <span onClick={() => handleClose(t.id)} className="close">
                x
              </span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
