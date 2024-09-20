import EventListener3 from './exercices/EventListener3'
import EventListener4 from './exercices/EventListener4'
import StateChallenge from './exercices/StateChallenge'
import Lifecycle1 from './exercices/Lifecycle1'
import Lifecycle2 from './exercices/Lifecycle2'
import LifecycleChallenge from './exercices/LifecycleChallenge'
import Ajax from './components/Ajax'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet /> {/* Charge le bon élément en fonction de la page */}

      <Ajax />

      <h2 className="text-3xl font-bold mb-3">Exercice state challenge</h2>
      <StateChallenge />
      <h2 className="text-3xl font-bold mb-3">Exercice event listener 3</h2>
      <EventListener3 />
      <h2 className="text-3xl font-bold mb-3">Exercice event listener 4</h2>
      <EventListener4 />

      <h2 className="text-3xl font-bold mb-3">Exercice cycle de vie 1</h2>
      <Lifecycle1 />
      <h2 className="text-3xl font-bold mb-3">Exercice cycle de vie 2</h2>
      <Lifecycle2 />
      <h2 className="text-3xl font-bold mb-3">Exercice cycle de vie challenge</h2>
      <LifecycleChallenge />
    </>
  )
}

export default App
