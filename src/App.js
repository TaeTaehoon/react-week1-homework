import React, { useRef, useState } from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TodoList from "./components/pages/TodoList";
import Todo from "./components/todo/Todo";
import List from "./components/list/List";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    description: "",
    isDone: false,
  });

  // const { title, description } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const nextId = useRef(0);
  const onSubmit = (e) => {
    const todo = {
      id: nextId.current,
      title: inputs.title,
      description: inputs.description,
      isDone: false,
    };
    nextId.current += 1;
    setTodos([...todos, todo]);
    setInputs({ title: "", description: "" });
    console.log(todos);
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <Layout>
      <Header>
        <Form
          onChange={onChange}
          onSubmit={onSubmit}
          title_input={inputs.title}
          description_input={inputs.description}
        />
      </Header>
      <TodoList>
        <Todo todos={todos} onToggle={onToggle} onRemove={onRemove} />
        <List todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </TodoList>
    </Layout>
  );
}

export default App;
