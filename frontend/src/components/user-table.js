import React from 'react'


export default class User extends React.Component{
    render() {
        return (
            <div className='container'>
                <h1>Registered Users List</h1>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Phone</th>
                            <th scope="col">Password</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.phone}</td>
                                    <td>{user.password}</td>
                                    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        );
    }
}