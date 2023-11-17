import './App.css'
import TodoForm from './components/TodoForm'
import { useSelector } from 'react-redux' ;
import TodoItem from './components/TodoItem';
function App() {

  const todos = useSelector(state => state.todos);
  const editingId = useSelector(state => state.editingId);
  const isEditing = editingId !== null
  return (
    <div className='h-screen flex justify-start gap-20 items-center flex-col pt-5'>
<h1 className='text-white text-3xl' >
  Redux toolkit 
</h1>
  <div>
    <TodoForm />
    <div className={`${isEditing? " cursor-not-allowed blurry pointer-events-none" : ""} transition-all ease-in-out duration-500`}>
       {
        todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
       }
    </div>
  </div>
    </div>
  )
}

export default App
