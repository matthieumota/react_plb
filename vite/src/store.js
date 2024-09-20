import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// La partie concernant les todos
const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: [
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true },
  ],

  // Les actions sur ces données
  reducers: {
    addTodo(state, action) {
      // { type: 'todo/addTodo', payload: 'Faire le projet' }
      const newTodo = { id: Date.now(), text: action.payload, done: false };

      // On peut modifier le state directement grâce à Redux
      // state.push(newTodo);
      return [ ...state, newTodo ];
    },
    toggleTodo(state, action) {
      // { type: 'todo/toggleTodo', payload: 20 }
      //const todo = state.find(t => t.id === action.payload);
      // todo.done = !todo.done;
      return state.map(t => t.id === action.payload ? { ...t, done: !t.done } : t);
    },
    deleteTodo(state, action) {
      // { type: 'todo/deleteTodo', payload: 20 }
      return state.filter(t => t.id !== action.payload);
    },
    initTodos(state, action) {
      return action.payload.map(t => ({
        ...t,
        name: t.title,
        done: t.completed
      }))
    }
  },

  // Les sélecteurs permettent de "filtrer" les données
  selectors: {
    allTodos: (state) => state,
    countTodo: (state) => state.length,
    uncompletedTodos: (state) => state.filter(t => !t.done)
  }
});

export const { allTodos, countTodo, uncompletedTodos } = todoSlice.selectors
// Actions
export const { addTodo, toggleTodo, deleteTodo, initTodos } = todoSlice.actions;

// Actions asynchrones
export const loadTodos = () => async (dispatch, getState) => {
  console.log(getState())
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

  dispatch(initTodos(response.data))
}

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
