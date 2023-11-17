import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo,updateTodo } from '../features/todo/todoSlice';
function TodoForm() {
  const dispatch = useDispatch();
  const [msg,setMsg] = React.useState("");
  const {todos} = useSelector(state =>state);
  const editingId = useSelector(state => state.editingId)
  console.log(editingId);
  const isEditing = editingId !== null ;
  
  React.useEffect(()=>{
     if(isEditing){
        const editingTodo = todos.find(todo => todo.id === editingId)
        if(editingTodo){
            console.log(editingTodo)
            setMsg(editingTodo.text)
        }
     }
  },[isEditing,editingId,todos])

  const submitHandler = (e) =>{
       e.preventDefault() ;
       if(isEditing){
          dispatch(updateTodo({text:msg,id:editingId}))
       }
       else{
          dispatch(addTodo(msg));
       }
       setMsg("")
  }
 
  return (
    <div>
    <form onSubmit={submitHandler} className='flex gap-1'>
        <input 
        type ="text"
        placeholder='write your todo'
        className="outline-none px-3 py-1.5 w-96 border border-black/10 rounded-l-lg h-12"
        value={msg}
        onChange={(e)=>{setMsg(e.target.value)}}
        />
        <button className={`px-2 ${isEditing ? "bg-green-700" : "bg-blue-700" }  h-12 rounded-r-lg w-24 transition-all ease-in-out duration-500`} type='submit'>{isEditing ? "Edit Todo" :"Add Todo"}</button>
    </form>
    </div>
  )
}

export default TodoForm