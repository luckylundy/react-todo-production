import React from "react";

export const Todos = (props) => {
  const {
    todos,
    onClickOpen,
    filterOptions,
    onClickOpenEditForm,
    onClickDelete
  } = props;
  return (
    <>
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
                <button onClick={() => onClickOpenEditForm(todo)}>編集</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
