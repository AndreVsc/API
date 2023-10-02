import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../api/hook/use-axios';
import apFetch from '../api/config';

function Api() {
    const { id } = useParams();
    const [data, loading, error] = useAxios({
        axiosInstance: apFetch,
        method: 'GET',
        url: `/posts/${id}`,
    });

    if (loading) {
        return <h3>Carregando...</h3>;
    }

    if (error) {
        return <h1>Error!</h1>;
    }

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}

export default Api;