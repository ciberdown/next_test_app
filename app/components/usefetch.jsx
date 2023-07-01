import { useEffect, useState } from "react";
import axios from "axios";
export default function usefetch(getUrl) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setUsers(response.data);
        setLoading(false)
        console.log(response.data);
      } catch (err) {
        setError(err);
        throw err;
      }
    };
    fetchData(getUrl);
  }, []);
  return { users, error, loading };
}
