import React, {useState, useEffect} from 'react';



export default function Product(){

    const [products, setProducts] = useState([]);

    useEffect( async()=>{
        const response = await fetch('http://localhost:3333/api/products');
        const data = await response.json();

        setProducts(data);
    },
    []);

    return(
        <>
            <ul>
                {products.map( prod =>(
                    <li key={prod.id}> {prod.nome} </li>
                ))}
            </ul>
        </>
    )
};