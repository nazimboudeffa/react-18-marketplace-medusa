import { useState, useEffect } from "react";

const Products = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "https://api.instant-market.com/store/products"
        );
        const data = await response.json();
        setData(data);
      }
      fetchData();
    }, []);
  
    return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
  };

  export default Products