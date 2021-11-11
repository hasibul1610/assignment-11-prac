import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    console.log(status);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdate = id => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
    }


    return (
        <div>
            <h1>All Orders : {orders.length}</h1>
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
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td><input
                                onChange={handleStatus}
                                type="text"
                                defaultValue={pd.status} /></td>
                            {/* <td><input {...register("firstName")} />
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select></td> */}

                            <button

                                className="btn bg-danger p-1"
                            >Delete</button>
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-success p-1"
                            >Update</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrders;