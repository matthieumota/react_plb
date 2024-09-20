import { Outlet } from 'react-router-dom'
import MenuLink from './components/MenuLink'
import { useSelector } from 'react-redux'
import { countTodo } from './store';

function App() {
  const todosLength = useSelector(countTodo);

  return (
    <>
      <div className="bg-slate-600">
        <nav className="max-w-screen-xl mx-auto mb-8">
          <MenuLink className={'bg-red-500'} to="/">Accueil</MenuLink>
          <MenuLink to="/films">Films</MenuLink>
          <MenuLink to="/a-propos">A propos</MenuLink>
          <MenuLink to="/exercices/lifecycle">Exercices Lifecycle</MenuLink>
          <MenuLink to="/exercices/event-listener">Exercices Event listener</MenuLink>
          <MenuLink to="/todos">Todos</MenuLink>

          <strong className="text-white">{todosLength}</strong>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <Outlet /> {/* Charge le bon élément en fonction de la page */}
      </div>
    </>
  )
}

export default App
