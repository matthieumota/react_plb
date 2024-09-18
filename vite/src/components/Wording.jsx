import { useState } from 'react';
import Button from './Button';

function Wording() {
  const [name, setName] = useState('Toto');

  return (
    <>
      {name && <h2>Le mot est {name}</h2>}
      <div>
        <Button onClick={() => setName('Fiorella')}>Fiorella</Button>
        <Button onClick={() => setName('')} disabled={!name} id="5" title="ok">Supprimer</Button>
      </div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
    </>
  );
}

export default Wording;
