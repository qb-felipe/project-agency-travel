import React, {useState, useEffect} from 'react';



export default function Product(){

    const [products, setProducts] = useState([]);

    useEffect( async()=>{
        const response = await fetch('http://localhost:3333/api/products');
        const data = await response.json();

        setProducts(data);
    },[]);

    return(
        <>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Hotel</th>
                    <th>Valor Diária</th>
                </tr>

                {products.map( prod => (
                    <tr key={prod.id}>
                        <td> {prod.nome} </td>
                        <td> {prod.preco} </td>
                        <td> {prod.hotel} </td>
                        <td> {prod.valor_dia} </td>
                    </tr>
                ))}
                    
            </table>
        </>
    )
};