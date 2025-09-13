import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending,setIsPending]= useState(true)

    useEffect(() => {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
      setIsPending(false)
      setError(null)

    })
    .catch((err) => {
      setError(err.message)
      setIsPending(false)

    });
}, [url]); 

return {data,error,isPending};

}


export default useFetch

//