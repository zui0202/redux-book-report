import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../modules/todoList/actions";
import styles from "./Todo.module.css";

const TodoList = props => {
  const { todoList, handleAddTodo, handleDeleteTodo } = props;
  const toggle = () => {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.style.display = "flex";
  }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>📚 짧은 독후감</h1>
        </div>
        <div className={styles.writeBtnContainer}>
            <button className={styles.writeBtn} onClick={toggle}>📝 독후감 쓰기</button>
        </div>
        <div id="inputContainer" className={styles.inputContainer}><TodoForm onClickAddTodo={handleAddTodo} /></div>
        <div className={styles.listContainer}>
            <div className={styles.list}>
                {todoList &&
                todoList.map(todo => (
                    <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    onClickDeleteTodo={handleDeleteTodo}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddTodo: ({ id, title, description }) =>
    dispatch(addTodo({ id, title, description })),
  handleDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);