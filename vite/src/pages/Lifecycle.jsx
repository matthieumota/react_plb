import Lifecycle1 from '../exercices/Lifecycle1';
import Lifecycle2 from '../exercices/Lifecycle2';
import LifecycleChallenge from '../exercices/LifecycleChallenge';

function Lifecycle() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Exercice cycle de vie 1</h2>
      <Lifecycle1 />
      <h2 className="text-3xl font-bold mb-3">Exercice cycle de vie 2</h2>
      <Lifecycle2 />
      <h2 className="text-3xl font-bold mb-3">Exercice cycle de vie challenge</h2>
      <LifecycleChallenge />
    </>
  );
}

export default Lifecycle;
