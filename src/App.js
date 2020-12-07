import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  const [Todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...Todos, input]);
    setInput("");
  };

  return (
    <div className="app">
      <h1>Todo List App</h1>

      <div className="app_main">
        <ul>
          {Todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>

        <FormControl className="form">
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="Input"
          />
        </FormControl>

        <Button
          onClick={addTodo}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
          className="app_button"
        >
          Add Todo
        </Button>
      </div>
    </div>
  );
}

export default App;
