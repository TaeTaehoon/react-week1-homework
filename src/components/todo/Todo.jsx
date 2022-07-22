import React from "react";
import "./style.css";

function Todo(props) {
  const todos = props.todos;
  const onToggle = props.onToggle;
  const onRemove = props.onRemove;
  return (
    <>
      <h1>오늘도 열심히!🔥</h1>
      <div className="todo_container">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <div className="todo_card" key={todo.id}>
                <p className="title">{todo.title}</p>
                <p className="desc">{todo.description}</p>
                <span>
                  <button onClick={() => onRemove(todo.id)}>삭제하기</button>
                  <button onClick={() => onToggle(todo.id)}>다했다!</button>
                </span>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Todo;
