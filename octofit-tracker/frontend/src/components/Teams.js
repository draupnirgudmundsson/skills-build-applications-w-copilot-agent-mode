import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://redesigned-space-spoon-xv99797vwq7cv95v-8000.app.github.dev/api/teams/')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Teams</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.id}>
                            <td>{team.id}</td>
                            <td>{team.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Teams;