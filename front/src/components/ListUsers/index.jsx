import React, {useState, useEffect} from 'react';

export default function ListUsers(){

    const [users, setUsers] = useState([]);
    
    useEffect( async () => {
        const response = await fetch('http://localhost:3333/api/users');
        const data = await response.json();

        setUsers(data);
    }, []);

    return(
        <>
            <table>
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
                    
            </table>
        </>
    )

}