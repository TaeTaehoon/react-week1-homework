import React, { useState } from "react";
import "./style.css";

function Form() {
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const { title, description } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e) => {
    const todo = {
      title: inputs.title,
      description: inputs.description,
    };
    setTodos([...todos, todo]);
    setInputs({ title: "", description: "" });
  };
  return (
    <div className="form_container">
      <div className="input_group">
        <input
          type="text"
          name="title"
          onChange={onChange}
          placeholder="제목"
          value={title}
        ></input>
        <input
          type="text"
          name="description"
          onChange={onChange}
          placeholder="내용"
          value={description}
        ></input>
      </div>
      <button onClick={onSubmit}>추가하기</button>
    </div>
  );
}

export default Form;
