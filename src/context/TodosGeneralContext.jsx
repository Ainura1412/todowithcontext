import { createContext, useState } from "react";
export const TodosGeneralContext = createContext([])

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([])

    function addTodo(newTodo) {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }
    const deleteTodo = (index) => {
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])


    }
    const data = {
        information: "Information from my context",
        todos: todos,
        setTodos: setTodos,
        deleteTodo: deleteTodo
    }
    return (
        <TodosGeneralContext.Provider value={data}>
            {children}
        </TodosGeneralContext.Provider>
    )
}