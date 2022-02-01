import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: 501, status: "未着手", title: "React" },
    { id: 502, status: "進行中", title: "Javascript" },
    { id: 503, status: "完了", title: "Ruby" }
  ]);
  const [open, setOpen] = useState(false);
  const filterOptions = [
    { value: "all", label: "すべて" },
    { value: "notStarted", label: "未着手" },
    { value: "inProgress", label: "作業中" },
    { value: "done", label: "完了" }
  ];
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();
  const [newTitle, setNewTitle] = useState("");

  const getValue = (event) => {
    setTitle(event.target.value);
  };

  const AddTodo = () => {
    if (title === "") return;
    // 変数todoにid,status,titleのプロパティを設定する
    const todo = { id: todos.length + 1, status: "incompleted", title };
    setTodos([...todos, todo]);
    setTitle("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const handleChangeEditTodo = (e) => {
    setNewTitle(e.target.value);
  };

  const onClickOpenEditForm = ({ id, title }) => {
    setEditing(true);
    setEditId(id);
    setNewTitle(title);
  };

  const onClickCloseEditForm = () => {
    setEditing(false);
    setEditId("");
  };

  const onClickUpdateTodo = () => {
    setTodos(
      [...todos].map((todo) =>
        todo.id === editId ? { ...todo, title: newTitle } : todo
      )
    );
    setNewTitle("");
    onClickCloseEditForm();
  };

  return (
    <>
      <div className="container">
        {editing ? (
          <div className="edit-area">
            <input
              value={newTitle}
              onChange={handleChangeEditTodo}
              placeholder="TODOを編集"
            />
            <button onClick={onClickUpdateTodo}>更新</button>
            <button onClick={onClickCloseEditForm}>キャンセル</button>
          </div>
        ) : (
          <div className="input-area">
            <input value={title} onChange={getValue} placeholder="TODOを入力" />
            <button onClick={AddTodo}>追加</button>
          </div>
        )}
        <div className="todo-area">
          <h2>TODO一覧</h2>
          <ul>
            {todos.map((todo, index) => {
              return (
                <div key={todo.id} className="list-row">
                  <li>{todo.title}</li>
                  <select onClick={onClickOpen}>
                    {filterOptions.map(({ value, label }) => (
                      <option value={value}>{label}</option>
                    ))}
                  </select>
                  <button onClick={() => onClickOpenEditForm(todo)}>
                    編集
                  </button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
