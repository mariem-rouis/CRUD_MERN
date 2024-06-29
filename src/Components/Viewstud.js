import React from 'react'
import { Link } from 'react-router-dom'

export default function Viewstud() {
    return (
        <div className='container mt-5'>
            <Link className='btn btn-primary' to="/"> Home</Link>
            <div className='row mt-5'>

                <div className='col-md-6'>
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Students Details</li>
                        <li class="list-group-item">Students Name : .....</li>
                        <li class="list-group-item">Students Address:...</li>
                        <li class="list-group-item">Students Subject:........</li>
                        <li class="list-group-item">Students Mobile:....</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
