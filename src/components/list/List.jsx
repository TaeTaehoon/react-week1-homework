import React from "react";
import "./style.css";

function List(props) {
  const todos = props.todos;
  const onToggle = props.onToggle;
  const onRemove = props.onRemove;
  return (
    <>
      <h1>수고하셨습니다! 🎉</h1>
      <div>
        <div className="done_container">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <div className="todo_card" key={todo.id}>
                  <p className="title">{todo.title}</p>
                  <p className="desc">{todo.description}</p>
                  <span>
                    <button onClick={() => onRemove(todo.id)}>삭제하기</button>
                    <button onClick={() => onToggle(todo.id)}>취소</button>
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default List;
