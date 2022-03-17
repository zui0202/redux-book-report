import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ id, title, description, onClickDeleteTodo }) => {
  return (
    <div id="box" className={styles.box}>
        <button className={styles.btnX} onClick={() => onClickDeleteTodo(id)}>X</button>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.des}>{description}</p>
    </div>
  );
};

export default Todo;