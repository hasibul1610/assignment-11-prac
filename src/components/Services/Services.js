import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [control]);


    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
        console.log(id);
    }


    return (
        <div>
            <div className="container">
                <h1>Manage Services </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <td>{pd.status}</td>
                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn bg-danger p-2"
                                >Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default Services;