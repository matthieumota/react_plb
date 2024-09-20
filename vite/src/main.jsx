import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Lifecycle from './pages/Lifecycle.jsx'
import EventListener from './pages/EventListener.jsx'
import Movies from './pages/Movies.jsx'
import Movie from './pages/Movie.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import Todos from './pages/Todos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout principal de la page
    children: [
      { path: '', element: <Home /> },
      { path: 'a-propos', element: <div>A propos</div> },
      {
        path: 'exercices',
        children: [
          { path: 'lifecycle', element: <Lifecycle /> },
          { path: 'event-listener', element: <EventListener /> },
        ]
      },
      // { path: 'exercices/lifecycle', element: <div>Cycle de vie</div> },
      // { path: 'exercices/event-listener', element: <div>Event Listener</div> },
      //{ path: 'films', element: <Movies /> },
      //{ path: 'films/:id', element: <Movie /> },
      {
        path: 'films',
        element: <Movies />, // Attention d'avoir un outlet dans ce composant
        children: [
          // { path: '', element: <Movies /> },
          { path: ':id', element: <Movie /> },
        ]
      },
      { path: 'todos', element: <Todos /> }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
