import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout principal de la page
    children: [
      { path: '', element: <div>Accueil</div> },
      { path: 'a-propos', element: <div>A propos</div> },
      {
        path: 'exercices',
        children: [
          { path: 'lifecycle', element: <div>Cycle de vie</div> },
          { path: 'event-listener', element: <div>Event Listener</div> },
        ]
      },
      // { path: 'exercices/lifecycle', element: <div>Cycle de vie</div> },
      // { path: 'exercices/event-listener', element: <div>Event Listener</div> },
      { path: 'films', element: <div>Films</div> },
      { path: 'films/garfield', element: <div>Voir le film Gardfield</div> }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
