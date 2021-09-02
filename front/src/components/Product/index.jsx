import React, {Component, useState, useEffect} from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function Product(){

    const [products, setProducts] = useState([]);


    useEffect( async()=>{
        const response = await fetch('http://localhost:3333/api/products');
        const data = await response.json();

        setProducts(data);

    },[]);

    return(
        <>
            <div className="card">
                <DataTable value={products}>
                    <Column field="nome" header="Name"></Column>
                    <Column field="preco" header="Preco"></Column>
                    <Column field="hotel" header="Hotel"></Column>
                    <Column field="valor_dia" header="Valor Diária"></Column>
                </DataTable>
            </div>
            
            {/* <table>
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
                    
            </table> */}
        </>
    )
};