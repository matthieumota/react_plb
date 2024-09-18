import Button from './components/Button'
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
    </>
  )
}

export default App
