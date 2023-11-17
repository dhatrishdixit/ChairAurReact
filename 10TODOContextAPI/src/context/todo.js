import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos:[
        { 
            id:1,
            todo:'hello everyone',
            isCompleted:false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useTodo = () => {
      return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider ;