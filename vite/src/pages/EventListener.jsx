import EventListener3 from '../exercices/EventListener3';
import EventListener4 from '../exercices/EventListener4';
import StateChallenge from '../exercices/StateChallenge';

function EventListener() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Exercice state challenge</h2>
      <StateChallenge />
      <h2 className="text-3xl font-bold mb-3">Exercice event listener 3</h2>
      <EventListener3 />
      <h2 className="text-3xl font-bold mb-3">Exercice event listener 4</h2>
      <EventListener4 />
    </>
  );
}

export default EventListener;
