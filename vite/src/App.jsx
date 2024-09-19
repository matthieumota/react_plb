import { useState } from 'react'
import Button from './components/Button'
import Clock from './components/Clock'
import Counter from './components/Counter'
import List from './components/List'
import Wording from './components/Wording'
import EventListener3 from './exercices/EventListener3'
import EventListener4 from './exercices/EventListener4'
import StateChallenge from './exercices/StateChallenge'
import Lifecycle1 from './exercices/Lifecycle1'
import Lifecycle2 from './exercices/Lifecycle2'
import LifecycleChallenge from './exercices/LifecycleChallenge'

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <Clock />}
      <Button onClick={() => setShow(!show)}>Afficher</Button>

      <h1>React + Vite</h1>
      <Button emoji="🐈‍⬛">Valider</Button>
      <Button emoji="🐆">Envoyer</Button>
      <Button>Sauvegarder</Button>

      <div>
        <Wording />
      </div>

      <Counter />
      <Counter init={5} max={10} step={2} />
      <Counter max={5} />

      <List />

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
