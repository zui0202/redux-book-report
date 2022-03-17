import React, { useState } from "react";
import styles from "./Todo.module.css";
import {handleToggle} from "./TodoList";

const TodoForm = ({ onClickAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitleHandler = event => {
    setTitle(event.target.value);
  };

  const onChangeDescriptionHandler = event => {
    setDescription(event.target.value);
  };

  const writeCancel = () => {
    const inputContainer = document.getElementById("inputBox").parentElement;
    inputContainer.style.display="none";
  };

  return (
    <div id="inputBox" className={styles.inputBox}>
      <input className={styles.inputTitle} onChange={onChangeTitleHandler} value={title} placeholder="Title here" />
      <textarea className={styles.inputDes} onChange={onChangeDescriptionHandler} value={description} placeholder="Description here" />
      <button className={styles.writeOkBtn}
        onClick={() =>
          onClickAddTodo({ id: Math.random() * 10, title, description })
        }
      >
        추가
      </button>
      <button className={styles.writeCancelBtn} onClick={writeCancel}>취소</button>
    </div>
  );
};

export default TodoForm;