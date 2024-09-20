import Ajax from './components/Ajax'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
        <NavLink to="/exercices/lifecycle">Exercices Lifecycle</NavLink>
        <NavLink to="/exercices/event-listener">Exercices Event listener</NavLink>
      </nav>

      <Outlet /> {/* Charge le bon élément en fonction de la page */}

      <Ajax />
    </>
  )
}

export default App
