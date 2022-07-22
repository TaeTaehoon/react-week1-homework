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
  //todos의 시작값을 빈 배열로 설정해줘야함.
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    description: "",
    isDone: false,
  }); //input 값을 읽어와서 todos에 넣기 위한 뼈대 구조를 만들어둬야함.

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }; //todos에 넣기 위해 input 두개의 값을 묶어서 inputs의 [name]과 key가 같은 요소에 value를 대입시킴.

  const nextId = useRef(0);
  //todo마다 고유한 식별자로 id를 주기 위해 ref선언자 사용
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
  }; //위에서 정제한 inputs의 값과 ref로 선언한 id값을 todo에 저장함. todos의 불변성을 지키며 삽입. inputs 초기화

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }; //버튼이 눌린 todo_card의 id값과 일치하는 todo_card를 제외시키고 todos를 업데이트함.

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }; //버튼이 눌린 todo_card의 id값과 일치하는 todo의 isDone value를 반전시킴. 다른 todo들은 변화없음

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
