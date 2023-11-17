import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setEditingId , editChange, removeTodo,toggleComplete } from '../features/todo/todoSlice';

function TodoItem({todo}) {
  const isComplete = useSelector(state => {
      return state.todos.find(td => td.id === todo.id)?.isCompleted || false
  })

  const dispatch = useDispatch() ;
  const deleteHandler = () => {
     dispatch(removeTodo(todo.id))
  }
  const toggleHandler = () => {
     dispatch(toggleComplete(todo.id))
  }
  const editHandler = () => {
     dispatch(setEditingId(todo.id));
  }


  return (
    <div className='flex justify-between mt-2 '>
    <input type='checkbox' checked ={todo.isCompleted} onChange={toggleHandler} />
    <div className={`w-96 bg-blue-500 text-white bg-opacity-25 text-start px-3 ${todo.isCompleted ? 'line-through' : ''} `}>
    {todo.text}</div>
    <button onClick={editHandler} className={`bg-green-700 bg-opacity-25
     px-1`}>edit</button>
    <button onClick={deleteHandler} className={`bg-red-700 bg-opacity-25
     px-1`}>delete</button>
    </div>
  )
}

export default TodoItem