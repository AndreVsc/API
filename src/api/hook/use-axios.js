import axios from "axios";
import { useState, useEffect } from "react";

export default function useAxios({ axiosInstance, method, url, othersConfig = {} }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, { ...othersConfig });
                setData(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return [data, loading, error];
}
