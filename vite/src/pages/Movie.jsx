import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useFetch } from '../hook';

function Movie() {
  const { id } = useParams(); // Je récupére l'id sur la route
  const navigate = useNavigate(); // Permet de rediriger vers une page
  //const [movie, setMovie] = useState({});
  //const [loading, setLoading] = useState(false);
  const { data: movie, loading, error } = useFetch(`https://api.vueflix.boxydev.com/movies/${id}`);

  /*const fetchMovie = async () => {
    setLoading(true);

    const response = await axios.get(`https://api.vueflix.boxydev.com/movies/${id}`);

    setTimeout(() => setMovie(response.data), 1500);
  }*/

  const isLogged = () => true

  // Solution 1 pour faire un "guard"
  if (!isLogged()) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    // Solution 2 pour faire un "guard"
    if (!isLogged()) {
      return navigate('/');
    }

    // Le .catch pour les erreurs ou un try
    //fetchMovie()
    //  .catch((error) => console.log(error))
    //  .finally(() => setTimeout(() => setLoading(false), 1500))
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
