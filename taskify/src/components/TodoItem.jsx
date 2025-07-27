import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between border p-2 rounded">
      <div
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
        onClick={onToggle}
      >
        {todo.title}
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
