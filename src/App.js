import logo from './logo.svg';
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
