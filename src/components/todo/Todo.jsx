import React from "react";
import "./style.css";

function Card({ props, todo }) {
  const onToggle = props.onToggle;
  const onRemove = props.onRemove;
  return (
    <>
      {todo.isDone === false && (
        <div className="todo_card">
          <p className="title">{todo.title}</p>
          <p className="desc">{todo.description}</p>
          <span>
            <button onClick={() => onRemove(todo.id)}>삭제하기</button>
            <button onClick={() => onToggle(todo.id)}>다했다!</button>
          </span>
        </div>
      )}
    </>
  );
}

function Todo(props) {
  const todos = props.todos;

  return (
    <>
      <h1>오늘도 열심히!🔥</h1>
      <div className="todo_container">
        {todos.map((todo) => {
          return <Card props={props} todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
}

export default Todo;
