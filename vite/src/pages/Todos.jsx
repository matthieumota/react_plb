import { useDispatch, useSelector } from 'react-redux';
import { addTodo, allTodos, uncompletedTodos, deleteTodo, initTodos, loadTodos, toggleTodo } from '../store';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { formatPrice } from '../hook';

function TodoForm() {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const handleTodo = (e) => {
    e.preventDefault()

    // onAdded(newTodo) // Envoi une info / événement au parent
    dispatch(addTodo(newTodo))
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={(e) => handleTodo(e)} disabled={todos.length >= 10}>Ajouter</button>
    </form>
  )
}

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{todo.name}</span>
      <input type="checkbox" checked={todo.done} onChange={() => dispatch(toggleTodo(todo.id))} />
      <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
    </li>
  );
}

function Todos() {
  const todos = useSelector(allTodos);
  const uncompleted = useSelector(uncompletedTodos);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    //axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
    //  dispatch(initTodos(response.data))
    //})
    dispatch(loadTodos())
  }, [])

  // useMemo est une valeur mise en cache tant que uncompleted ne bouge
  const formatP = useMemo(() => formatPrice(uncompleted.length), [uncompleted]);

  return (
    <>
      <h1>Tâches restantes: {formatP}</h1>
      {count} <button onClick={() => setCount(count + 1)}>+</button>
      <ul>
        {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </ul>
      <TodoForm />
    </>
  );
}

export default Todos;
