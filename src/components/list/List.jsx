import React from "react";
import "./style.css";

function Card({ props, todo }) {
  const onToggle = props.onToggle;
  const onRemove = props.onRemove;
  return (
    <>
      {todo.isDone === true && (
        <div className="todo_card">
          <p className="title">{todo.title}</p>
          <p className="desc">{todo.description}</p>
          <span>
            <button onClick={() => onRemove(todo.id)}>삭제하기</button>
            <button onClick={() => onToggle(todo.id)}>취소</button>
          </span>
        </div>
      )}
    </>
  );
}

function List(props) {
  const todos = props.todos;
  return (
    <>
      <h1>수고하셨습니다! 🎉</h1>
      <div>
        <div className="done_container">
          {todos.map((todo) => {
            return <Card props={props} todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default List;
