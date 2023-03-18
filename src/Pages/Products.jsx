import React from 'react'
import '../Styles/Products.css'
import product from "../images/product-1.jpg"
import { Link } from 'react-router-dom';

export default function Products() {
    return (
        <>
            <div className='container-fluid  d-flex justify-content-between p-3'>
                <h1 className=''>Products</h1>
                <Link to={"AddProduct"}>
                    <button className='btn btn-success'>Create Product</button>
                </Link>
            </div>
            <div className=' p-3 PD_bg'>
                <div className=' container-fluid '>
                    <div className="row">
                        <div className="row gx-3 py-3">
                            <div className="col-lg-4 col-md-6 me-auto ">
                                <input type="text" placeholder="Search..." className="form-control p-2 mb-3" />
                            </div>
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>Status</option>
                                    <option>Active</option>
                                    <option>Disabled</option>
                                    <option>Show all</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>Show 20</option>
                                    <option>Show 30</option>
                                    <option>Show 40</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' p-3 PD_bg_product'>
                <div className=' container-fluid '>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3  mb-5  PD_cart">
                            <div className='PD_cart_product'>
                                <img src={product} className="w-100" alt="" />
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3 className='mb-0 pb-3'>price </h3>
                                    <div className=''>
                                        <i className="fa-solid fa-pen  btn btn-outline-primary fs-1 w-50 " />
                                        <i className="fa-solid fa-trash btn btn-outline-danger w-50 fs-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3  mb-5  PD_cart">
                            <div className='PD_cart_product'>
                                <img src={product} className="w-100" alt="" />
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3 className='mb-0 pb-3'>price </h3>
                                    <div className=''>
                                        <i className="fa-solid fa-pen  btn btn-outline-primary fs-1 w-50 " />
                                        <i className="fa-solid fa-trash btn btn-outline-danger w-50 fs-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3  mb-5  PD_cart">
                            <div className='PD_cart_product'>
                                <img src={product} className="w-100" alt="" />
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3 className='mb-0 pb-3'>price </h3>
                                    <div className=''>
                                        <i className="fa-solid fa-pen  btn btn-outline-primary fs-1 w-50 " />
                                        <i className="fa-solid fa-trash btn btn-outline-danger w-50 fs-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3  mb-5  PD_cart">
                            <div className='PD_cart_product'>
                                <img src={product} className="w-100" alt="" />
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3 className='mb-0 pb-3'>price </h3>
                                    <div className=''>
                                        <i className="fa-solid fa-pen  btn btn-outline-primary fs-1 w-50 " />
                                        <i className="fa-solid fa-trash btn btn-outline-danger w-50 fs-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3  mb-5  PD_cart">
                            <div className='PD_cart_product'>
                                <img src={product} className="w-100" alt="" />
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3 className='mb-0 pb-3'>price </h3>
                                    <div className=''>
                                        <i className="fa-solid fa-pen  btn btn-outline-primary fs-1 w-50 " />
                                        <i className="fa-solid fa-trash btn btn-outline-danger w-50 fs-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
