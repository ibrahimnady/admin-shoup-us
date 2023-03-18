import React from 'react'
import '../Styles/AddProduct.css'

export default function AddProduct() {
    return (
        <>
            <div className='d-flex justify-content-around'>
                <h1>Add Product</h1>
            </div>
            <div className='AD_bg '>
                <form action="">
                    <div className="mb-3 ">
                        <label for="title" className="form-label fw-bold">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Product Name" />
                    </div>
                    <div className="mb-3 ">
                        <label for="price" className="form-label fw-bold">price</label>
                        <input type="number" className="form-control" id="price" placeholder="price" />
                    </div>
                    <div className="mb-3 ">
                        <label for="countInStock" className="form-label fw-bold">countInStock</label>
                        <input type="number" className="form-control" id="countInStock" placeholder="countInStock" />
                    </div>
                    <div className="mb-3 ">
                        <label for="Description" className="form-label fw-bold">Description</label>
                        <textarea className="form-control" name="" id="Description" cols="30" rows="10" placeholder="Description" />
                    </div>
                    <div className="mb-3 ">
                        <label for="images" className="form-label fw-bold">Images</label>
                        <input type="text" className="form-control" id="images" placeholder="Put URL here" />
                    </div>
                    <div className="mb-3 ">
                        <label for="formFile" className="form-label fw-bold">Default file input example</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success '>Publish</button>
                    </div>
                </form>
            </div>
        </>
    )
}
