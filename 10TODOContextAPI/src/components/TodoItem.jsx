import { useTodo } from "../context";
import React, { useEffect } from "react";

//{ todo } is done here to destructure props
function TodoItem({todo}) {
 
  const {editTodo,deleteTodo,toggleComplete} = useTodo();
  const [isTodoEditable,setIsTodoEditable] = React.useState(todo.isCompleted);
  const [todoMsg,setTodoMsg] = React.useState(todo.todo);

  const updateTodo = () =>{
      console.log('working');
      editTodo({...todo,todo:todoMsg},todo.id)
      setIsTodoEditable(false);
  }
  const toggleCompleted = () => {
        toggleComplete(todo.id)
  }

  return (
      <div
          className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.isCompleted}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.isCompleted) return;

                  if (isTodoEditable) {
                      updateTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.isCompleted}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" readOnly={isTodoEditable}
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
