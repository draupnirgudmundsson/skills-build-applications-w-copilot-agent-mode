import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://redesigned-space-spoon-xv99797vwq7cv95v-8000.app.github.dev/api/users/')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;