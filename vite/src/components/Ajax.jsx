import { useEffect, useState } from 'react';
import axios from 'axios';

function Ajax() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get(`https://api.vueflix.boxydev.com/movies?_page=1&_limit=5`).then((response) => {
      setTimeout(() => setMovies(response.data), 300)
    }).catch(() => { // Cas d'erreur
      setError(true);
    }).finally(() => { // Tous les cas
      setTimeout(() => setLoading(false), 300);
    });
  }, []);

  if (loading) {
    return <h1 className="my-80">Chargement en cours...</h1>;
  }

  if (error) {
    return <h1 className="my-80">Désolé, l'API n'est pas disponible</h1>;
  }

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-5 gap-8">
          {movies.map(movie =>
            <div key={movie.id}>
              <h2 className="truncate">{movie.title}</h2>
              <img src={movie.poster_path} width={100} className="w-full" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Ajax;
