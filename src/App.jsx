import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のToDo</p>

        <li>あああああ</li>
        <button>削除</button>
        <button>完了</button>
        <li>いいいいい</li>
        <button>削除</button>
        <button>完了</button>
      </div>
      <div className="complete-area">
        <p>完了のToDo</p>

        <li>あああああ</li>
        <button>戻す</button>
        <li>あああああ</li>
        <button>戻す</button>
      </div>
    </>
  );
};
