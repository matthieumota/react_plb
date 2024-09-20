import Ajax from './components/Ajax'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet /> {/* Charge le bon élément en fonction de la page */}

      <Ajax />
    </>
  )
}

export default App
