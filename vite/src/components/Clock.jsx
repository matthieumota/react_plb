import { useEffect, useRef, useState } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  const oldDate = useRef(); // Permet de garder une valeur tout au long de la vie du composant

  // Fonction à faire quand le DOM est prêt
  useEffect(() => {
    const i = setInterval(() => {
      setDate(new Date())
      console.log(Math.random())
    }, 1000);

    // Cette fonction est appelée quand le composant est
    // détruit
    return () => {
      clearInterval(i);
    }
  }, []);

  useEffect(() => {
    if (date.getSeconds() % 10 === 0) {
      console.log('DING DONG', oldDate);
    }

    return () => {
      oldDate.current = date.getSeconds(); // On garder l'ancienne date pour pouvoir l'utiliser avec le ding dong
      console.log('AVANT', oldDate);
    }
  }, [date]); // A chaque mise à jour de date, on lance l'effect

  return (
    <h1>{date.toLocaleTimeString()}</h1>
  );
}

export default Clock;
