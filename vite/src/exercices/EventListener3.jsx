import { useState } from 'react';

function EventListener3() {
  const [animal, setAnimal] = useState('Ronron');
  const [notes, setNotes] = useState([1, 10, 15, 19, 20]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const displayText = (s) => {
    alert(s)
  }

  const removeLastElement = () => {
    const newNotes = notes.slice(0, -1) // On pourrait aussi écraser notes
    setNotes(newNotes) // Asynchrone
    // notes.filter((v, i) => i < notes.length - 1)

    if (newNotes.length <= 0) {
      setTimeout(() => setNotes([1, 2, 3, 4, 5]), 2000)
    }
  }

  return (
    <div>
      <div>
        <p>Créer une fonction displayText qui prend en paramètre une chaîne de caractère</p>
        <p>Créer un bouton qui envoie la valeur de state de animal en paramètre, et qui appelle la fonction displayText</p>
      </div>
      <button onClick={() => displayText(animal)}>Appel</button>
      <div>
        <p>Créer un bouton qui va retirer le dernier élément de la liste des notes</p>
        <p>Il faut que le bouton appelle une fonction removeLastElement, qui va retirer le dernier élément des notes.</p>
        <p>
          <a href="https://react.dev/learn/updating-arrays-in-state">
            Documentation sur les tableaux
          </a>
        </p>
        {notes.map((note, index) => <p key={index}>{note}</p>)}
        {notes.length > 0 && <button onClick={removeLastElement}>Remove</button>}
        {notes.length <= 0 && <h2 className="text-2xl font-bold text-green-600">Vous avez gagné</h2>}
      </div>
      <div>
        <p>Créer un bouton qui va afficher ou non cette image en changeant la valeur de isDisplayed</p>
        <p>Il faut que le bouton appelle une fonction changeImageDisplay, qui va changer le state deisDisplayed</p>
        {isDisplayed && <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=1200%2C500" alt="airbnb" />}
        <button onClick={() => setIsDisplayed(!isDisplayed)}>
          {!isDisplayed ? 'Afficher' : 'Cacher'}
        </button>
      </div>
    </div>
  )
}

export default EventListener3
