import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://redesigned-space-spoon-xv99797vwq7cv95v-8000.app.github.dev/api/activities/')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Activities</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>{activity.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Activities;