import React from 'react'
import { Link } from 'react-router-dom'
export default function Allstud() {
    return (
        <div className='container mt-5'>
            <div className="mt-3">
                <Link className=' btn btn-success' to="/addstud">Add Student</Link>
            </div>
            <table class="table mt-5">
                <thead>
                    <tr className='bg-success'>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>mimi</td>

                        <td>test</td>
                        <td>12565885</td>
                        <td>test</td>
                        <td><Link className='btn btn-primary me-3' to="/viewstud"> View</Link>
                            <Link className='btn btn-danger me-3'>Delete</Link>
                            <Link className='btn btn-warning me-3' to="/editstud/:id">  Edit</Link></td>

                    </tr>


                </tbody>
            </table>
        </div>
    )
}
