import React from "react";
import Todo from "./Todo";

const todos = [
  { description: "Einkaufen", done: false },
  { description: "Sport", done: false },
  { description: "Programmieren", done: false },
];

const TodoList = () => {
  return (
    <div>
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
