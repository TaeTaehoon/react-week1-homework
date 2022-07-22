import React, { useState } from "react";
import "./style.css";

function Form(props) {
  const title = props.title_input;
  const description = props.description_input;
  const onChange = props.onChange;
  const onSubmit = props.onSubmit;

  return (
    <div className="form_container">
      <div className="input_group">
        <span>제목:</span>
        <input
          type="text"
          name="title"
          onChange={onChange}
          placeholder="제목"
          value={title}
        ></input>
        <span>할일:</span>
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
