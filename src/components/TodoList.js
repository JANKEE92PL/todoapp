import React from "react";
import Todo from "./Todo";

const todos = [
  { description: "Einkaufen", done: false },
  { description: "Sport", done: false },
  { description: "Programmieren", done: false },
];

const TodoList = () => {
  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white text-3xl py-4 font-semibold">
        <h1>To do List</h1>
      </div>
      {todos.map((item, index) => {
        return (
          <Todo
            description={item.description}
            done={item.done}
            key={index}
          ></Todo>
        );
      })}
    </div>
  );
};

export default TodoList;
