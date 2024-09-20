import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

function Movie() {
  const { id } = useParams(); // Je récupére l'id sur la route
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMovie = async () => {
    setLoading(true);

    const response = await axios.get(`https://api.vueflix.boxydev.com/movies/${id}`);

    setTimeout(() => setMovie(response.data), 1500);
  }

  useEffect(() => {
    // Le .catch pour les erreurs ou un try
    fetchMovie()
      .catch((error) => console.log(error))
      .finally(() => setTimeout(() => setLoading(false), 1500))
  }, [id]); // Si l'id de la route change, on refais une requête

  if (loading) {
    return <Loader className="w-20 h-20 mx-auto" />;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        <img src={movie.poster_path} className="w-full" />
        <div>
          <h2 className="truncate text-slate-900 mb-8 text-3xl font-bold">{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default Movie;
