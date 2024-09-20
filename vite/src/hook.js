import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = async () => {
    setLoading(true);

    const response = await axios.get(url);

    setTimeout(() => setData(response.data), 1500);
  }

  useEffect(() => {
    fetch()
      .catch(() => setError(true))
      .finally(() => setTimeout(() => setLoading(false), 1500))
  }, [url])

  return { data, loading, error }
}

export { useFetch }
