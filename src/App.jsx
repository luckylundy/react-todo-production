import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="input-area">
          <input placeholder="TODOを入力" />
          <button>追加</button>
        </div>
        <div className="incomplete-area">
          <h2>未完了のTODO</h2>
          <ul>
            <div className="list-row">
              <li>aaaa</li>
              ID:<span>1</span>
              状態:<span>未着手</span>
              <button>完了</button>
              <button>削除</button>
            </div>
            <div className="list-row">
              <li>iiii</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          </ul>
        </div>
        <div className="complete-area">
          <h2>完了のTODO</h2>
          <ul>
            <div className="list-row">
              <li>uuuu</li>
              <button>戻す</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
