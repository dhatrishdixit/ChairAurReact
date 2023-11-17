import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:1,
            text:"hello everyone",
            isCompleted:false,
  //          editing:false
        }
    ],
    editingId : null
}


// state gives value of current state , from action.payload we can get the value passed through 
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                isCompleted:false,
                // editing:false
            }
            state.todos.push(todo)
            state.editingId = null ;
        },
        removeTodo:(state,action)=>{
             state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo,text:action.payload.text} : todo )
            state.editingId = null ;
        },
        toggleComplete:(state,action)=>{
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo,isCompleted:!todo.isCompleted} : todo)
        },
        // editChange:(state,action)=>{
        //     state.todos = state.todos.map(todo => todo.id ===action.payload ? {...todo,edit:!todo.edit} : todo)
        // },
        setEditingId:(state,action)=>{
            state.editingId = action.payload
        }
    }    
})
export const {addTodo,removeTodo,updateTodo,toggleComplete,editChange,setEditingId} = todoSlice.actions ;

export default todoSlice.reducer ;