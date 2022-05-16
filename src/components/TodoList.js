import React from "react";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const alltodos = [
  { description: "Einkaufen", done: false },
  { description: "Sport", done: false },
  { description: "Programmieren", done: false },
];

const TodoList = () => {
  const [opencount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(alltodos);

  const countOpen = () => {
    const doneTodos = todos.filter((item) => {
      return !item.done;
    });
    countOpenTodos(doneTodos.length);
  };

  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  useEffect(() => {
    countOpen();
  }, [todos]);

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white text-3xl py-4 font-semibold">
        <h1>To do List</h1>
        <h2>Offene Todos: {opencount}</h2>
      </div>
      {todos.map((item, index) => {
        return (
          <Todo
            description={item.description}
            done={item.done}
            key={index}
            index={index}
            onChangeTodo={changeTodo}
          ></Todo>
        );
      })}
    </div>
  );
};

export default TodoList;
