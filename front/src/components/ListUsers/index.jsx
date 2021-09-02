import React, {useState, useEffect} from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ListUsers(){

    const [users, setUsers] = useState([]);
    
    useEffect( async () => {
        const response = await fetch('http://localhost:3333/api/users');
        const data = await response.json();

        setUsers(data);
    }, []);

    return(
        <>
            <div className="card">
                <DataTable value={users}>
                    <Column field="id" header="Id"></Column>
                    <Column field="name" header="Nome"></Column>
                    <Column field="login" header="Login"></Column>
                    <Column field="address" header="Endereço"></Column>
                    <Column field="ddd" header="DDD"></Column>
                    <Column field="phone_number" header="Telefone"></Column>
                </DataTable>
            </div>
            {/* <table>
                <tr>
                    <th>Nome</th>
                    <th>Login</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                </tr>

                {users.map( user => (
                    <tr key={user.id}>
                        <td> {user.name} </td>
                        <td> {user.login} </td>
                        <td> {user.address} </td>
                        <td> {`(${user.ddd}) ${user.phone_number}`} </td>
                    </tr>
                ))}
                    
            </table> */}
        </>
    )

}