import { useContext, useState } from 'react'
import { TodosGeneralContext } from '../context/TodosGeneralContext'
function AddTodo() {

    const [newTodo, setNewTodo] = useState("")
    const anyname = useContext(TodosGeneralContext)
    return (
        <><input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button onClick={() => anyname.setTodos(prev => [...prev, newTodo])}>SaveTodo</button>
            <h1>{anyname.information}</h1></>
    )
}
export default AddTodo