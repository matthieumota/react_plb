import { useState } from 'react';

function EventListener4() {
  const [vegetables, setVegetables] = useState([
    {
      name: 'Courgette',
      draftName: '', // DraftName contient la valeur de l'input destiné à faire changer de nom à l'aliment.
      price: 5,
    },
    {
      name: 'Popotiron',
      draftName: '',
      price: 155,
    },
    {
      name: 'Baba',
      draftName: '',
      price: 99,
    },
    {
      name: 'Carotte',
      draftName: '',
      price: 1,
    }
  ]);
  const [newVegetable, setNewVegetable] = useState({ name: '', price: 0 })

  const addVegetable = () => {
    setVegetables([ ...vegetables, { ...newVegetable, draftName: '' } ])
    setNewVegetable({ name: '', price: 0 })
  }

  const updateVegetableDraftName = (value, index) => {
    setVegetables(vegetables.map((v, i) => i === index ? { ...v, draftName: value } : v))
  }

  const changeVegetableName = (index) => {
    setVegetables(vegetables.map((v, i) => i === index ? { ...v, name: v.draftName, draftName: '' } : v))
  }

  const deleteVegetable = (index) => {
    const vegetable = vegetables.find((v, i) => i === index)

    if (confirm(`Voulez-vous supprimer ${vegetable.name}`)) {
      setVegetables(vegetables.filter((v, i) => i !== index))
    }
  }

  return (
    <div>
      <p>Je vous invite à lire ceci : <a href="https://www.robinwieruch.de/react-state-array-add-update-remove">Comment gérer les états avec les tableaux en React</a></p>
      <ul>
        <li>Afficher la liste des légumes. Pour chaque légume, afficher son nom et son prix</li>
        <li>Pour chaque légume, afficher un input de type texte qui prendra comme valeur son draftName</li>
        <li>Lier ce input avec une fonction updateVegetableDraftName qui met à jour le draftName du légume en question, on peut passer un index et l'event en paramètre.</li>
        <li>Créer une fonction changeVegetableName, qui prend en paramètre un nouveau nom, et un index de légume à modifier.</li>
        <li>Pour chaque légume, créer un bouton qui va appeler changeVegetableName en lui envoyant l'index du légume à modifier</li>
        <li>La fonction changeVegetableName doit pouvoir identifier le légume dont le nom doit changer, mettre à jour son nom et remettre sont draftName à ''</li>
      </ul>
      <ul>
        <li>Créer une fonction deleteVegetable, qui prend en paramètre un index de tableau, et qui supprime cet élément du tableau en mettant le state à jour</li>
        <li>Pour chaque légume, créer un bouton "supprimer" qui va appeler la fonction deleteVegetable, en lui envoyant comme paramètre l'index du légume</li>
      </ul>
      <ul>
        <li>Créer deux propriétés de state : Une propriété 'newVegetableName' de type String, et une propriété 'newVegetablePrice' de type String</li>
        <li>Créer une fonction addVegetable qui va créer un nouveau légume en se basant sur la valeur de ces deux propriétés</li>
        <li>Créer un petit formulaire composé de deux input, un input pour le nom du légume, et un autre pour le prix du légume.</li>
        <li>Chaque input doit être lié au state correspondant. L'input pour le nom du légume doit être lié à newVegetableName et l'input pour le type à newVegetablePrice</li>
        <li>Créer un bouton qui déclenche la fonction addVegetable</li>
      </ul>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="divide-y-2 mb-8">
          {vegetables.map((vegetable, index) =>
            <div key={index} className="pt-3 mt-3 flex items-center gap-4">
              <h2 className="text-xl font-bold inline-block">{vegetable.name}</h2>
              <p>{vegetable.price} €</p>
              <input type="text" value={vegetable.draftName} onChange={(event) => updateVegetableDraftName(event.target.value, index)} className="border-gray-300 rounded-md" />
              {vegetable.draftName && <button onClick={() => changeVegetableName(index)}>Changer</button>}
              <button className="bg-red-500 text-white hover:bg-red-400 duration-200"
                onClick={() => deleteVegetable(index)}>
                Supprimer
              </button>
            </div>
          )}
        </div>

        <div className="mb-3">
          <input className="border-gray-300 rounded-md" type="text"
            value={newVegetable.name} placeholder="Nom"
            onChange={(event) => setNewVegetable({ ...newVegetable, name: event.target.value })} />
        </div>
        <div className="mb-3">
          <input className="border-gray-300 rounded-md" type="text"
            value={newVegetable.price} placeholder="Prix"
            onChange={(event) => setNewVegetable({ ...newVegetable, price: event.target.value })} />
        </div>

        <button className="bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 duration-300"
          onClick={addVegetable}
          disabled={!newVegetable.name || !newVegetable.price}>
          Sauvegarder
        </button>
      </div>
    </div>
  )
}

export default EventListener4;
