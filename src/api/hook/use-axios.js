import axios from "axios";
import { config } from "localforage";
import { useState, useEffect } from "react";

export default function useAxios(configRequest){
    
    const {axiosInstance,method,url,config = {}} = configRequest

    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState('');


    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url,{...config})
                setData(res.data)
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()  
        }, [])

    return [data,loading,error];
}


