import React from 'react'
import { Link } from 'react-router-dom'

export default function EditStud() {
    return (
        <div className='container mt-5'>
            <form className='mx-auto w-50 shadow p-5'>
                <Link className=" btn btn-primary" to="/">Home</Link>
                <h1 className='mt-5'>Edit  Details</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Student Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Student Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Student Subject</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Student Mobile</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>


                <button className='btn btn-success'>Edit Student</button>

            </form>
        </div>
    )
}
