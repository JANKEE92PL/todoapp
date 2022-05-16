import React from "react";
import { useState } from "react";

const Todo = ({ description, done }) => {
  const [isdone, setDone] = useState(done);

  const changeTodo = () => {
    if (isdone) {
      setDone(false);
    } else {
      setDone(true);
    }
  };

  return (
    <div
      className={
        isdone
          ? "flex justify-between items-center p-2 bg-green-600 text-white"
          : "flex justify-between items-center p-2 bg-red-500 text-white"
      }
    >
      <h1 className="text-lg cursor-pointer" onClick={changeTodo}>
        {description}
      </h1>
      <button className="text-lg bg-gray-400 p-2 text-white">Löschen</button>
    </div>
  );
};

export default Todo;
