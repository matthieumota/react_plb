import Button from './components/Button'
import Counter from './components/Counter'
import List from './components/List'
import Wording from './components/Wording'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
