import React from 'react'
import '../Styles/Categories.css'

export default function Categories() {
    return (
        <>
            <div className='text-center'>
                <h1 className='m-3'>Categories</h1>
            </div>
            <div className=' container-fluid C_bg'>
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <form action="">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Name Here" />
                                <label for="name">Name</label>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label fw-bold">Chose your image</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="text" className="form-control" id="Description" placeholder="Description" />
                                <label for="Description">Description</label>
                            </div>
                            <button className='btn btn-success w-100'>Create category</button>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7">
                        <table className="table table-striped table-hover table-bordered border-secondary">
                            <thead>
                                <tr className='bg-info'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nme</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td className='C_info'>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item " href="#">Edit</a></li>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td className='C_info'>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item " href="#">Edit</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td className='C_info'>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item " href="#">Edit</a></li>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
