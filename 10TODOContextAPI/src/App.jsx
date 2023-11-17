import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./context"
import { useEffect, useState } from "react";

function App() {
  
  const [todos,setTodos] = useState([]);
  //both are correct   
  //  addTodo=(todo)=>{
  //     SetTodos([...todos,{id:Date.now(),...todo}]);
  //  }
   const addTodo = (todo)=>{
      setTodos((prev)=>([...prev,{id:Date.now(),...todo}]))
   }
   const editTodo=(todo,id)=>{
    console.log('inside edit todo')
        setTodos(prev =>prev.map(prevTodo => prevTodo.id == id ? todo :prevTodo))
        console.log('outside edit todo')
        console.log(todo)
        console.log(id)
   }
   const deleteTodo =(id)=>{
       setTodos(prev =>prev.filter(prevTodo =>prevTodo.id != id))
   }
   const toggleComplete=(id)=>{
       setTodos(prev =>prev.map(prevTodo => prevTodo.id == id ?{...prevTodo,isCompleted:!prevTodo.isCompleted} : prevTodo))
   }
// also correct 
//    toggleComplete=(id)=>{
//       setTodo(prev=>{
//           return prev.map(prevTodo=>{
//             if(prevTodo.id == id){
//                 prevTodo.isCompleted = !prevTodo.isCompleted
//                 return prevTodo ;
//             }
//             return prevTodo
//           })
//       })
//    }
  // we do {{}} to deStructure our object 

  // to get todos on reload 
  useEffect(()=>{
    const todos = JSON.parse(window.localStorage.getItem('todos'));
    if(todos && todos.length > 0){
        setTodos(todos);
    }
  },[])

  // to set todos everytime there is change 
  useEffect(()=>{
    window.localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])


  return (
    <TodoProvider value={{
      todos,addTodo,editTodo,deleteTodo,toggleComplete
    }}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white ">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* todo input form  */}
                         <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3 justify-center ">
                        {/*Loop and Add TodoItem here */}
                        {
                            todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
                        }
                    </div>
                </div>
            </div></TodoProvider>
  )
}

export default App
