import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <>
            <div className=' w-100 H_bg '>
                <div className='input-group '>
                    <input type="search" className='form-control' />
                    <button className='btn btn-light H_btn'><i className="fa-sharp fa-solid fa-magnifying-glass" /></button>
                    <div className='d-flex justify-content-center align-items-center'>
                        <i className="fa-solid fa-moon  H_bar" />
                        <i className="fa-solid fa-bell  H_bar" />
                        <span className=' H_bar fw-bold'>English</span>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
