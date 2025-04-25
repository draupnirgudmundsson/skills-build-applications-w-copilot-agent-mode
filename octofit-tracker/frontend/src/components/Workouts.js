import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://redesigned-space-spoon-xv99797vwq7cv95v-8000.app.github.dev/api/workouts/')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Workouts</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout.id}>
                            <td>{workout.id}</td>
                            <td>{workout.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Workouts;