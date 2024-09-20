import Ajax from './components/Ajax'
import { NavLink, Outlet } from 'react-router-dom'
import MenuLink from './components/MenuLink'

function App() {
  return (
    <>
      <div className="bg-slate-600">
        <nav className="max-w-screen-xl mx-auto mb-8">
          <MenuLink className={'bg-red-500'} to="/">Accueil</MenuLink>
          <MenuLink to="/films">Films</MenuLink>
          <MenuLink to="/a-propos">A propos</MenuLink>
          <MenuLink to="/exercices/lifecycle">Exercices Lifecycle</MenuLink>
          <MenuLink to="/exercices/event-listener">Exercices Event listener</MenuLink>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <Outlet /> {/* Charge le bon élément en fonction de la page */}
      </div>
    </>
  )
}

export default App
