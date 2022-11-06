import "./App.css";
import { useState } from "react";
function App() {
  const [toDos, setTodos] = useState([
    // { text: "hello", status: false, id: Date.now() },
  ]);
  const [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          style={{ color: "blue" }}
          onClick={() => {
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
            setTodo("");
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((val, index) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  key={index}
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id === val.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={val.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                {val.status ? (
                  <del>
                    <p style={{ color: "red" }}>{val.text} </p>
                  </del>
                ) : (
                  <p style={{ color: "green" }}>{val.text} </p>
                )}
              </div>
              <div className="right">
                <i
                  style={{ color: "red" }}
                  className="fas fa-times"
                  onClick={() => {
                    setTodos(
                      toDos.filter((values) => {
                        return values.id !== val.id;
                      })
                    );
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
