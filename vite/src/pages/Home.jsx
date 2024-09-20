import { useState } from 'react';
import Button from '../components/Button';
import Clock from '../components/Clock';
import Wording from '../components/Wording';
import Counter from '../components/Counter';
import List from '../components/List';

function Home() {
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
    </>
  );
}

export default Home;
