import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../Styles/orederDetails.css"

let Status = 'paid'
const OrderDedails = () => {
  return (
    <div className=" or_details container-sm">
      {/* <Link to={'orders'} > <button className=" btn btn-dark"> Back To Orders</button></Link> */}
      <div className="row">
        {/* Header  */}
        <div className="col-md-12  or_header py-3 mt-5">
          <div className="row">
            <div className="col-md-10 mb-3">
              <div className="or_date">
                <i className="fa-solid fa-calendar-days"></i> <span className=" text-white"> Dec 12 2021 </span>


              </div>
            </div>

            <div className="col-md-2 mb-3">
              <div className="or_options">
                <select className="form-select d-inline-block" >
                  <option>Change status</option>
                  <option>Awaiting payment</option>
                  <option>Confirmed</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>

              </div>
            </div>
          </div>



        </div>

        {/* Header  */}
        <div className="col-md-12 row m-auto container-sm order_info">

          <div className="col-md-4  d-flex  " >

            <i className="fa-solid fa-user icon_Sales d-flex  justify-content-center align-items-center my-4 fs-3"></i>
            <div className="text mt-4 ms-3"><h6 className="mb-1">Customer Name</h6> <span>User </span></div>
          </div>
          <div className="col-md-4 d-flex">

            <i className=" fa-solid fa-truck-moving icon_Sales d-flex  justify-content-center align-items-center my-4 fs-3"></i>
            <div className="text mt-4 ms-3"><h6 className="mb-1">Order info</h6> <span>Shipping: Tanzania </span></div>
          </div>
          <div className="col-md-4 d-flex">

            <i className="fa-solid fa-location-dot icon_Sales d-flex  justify-content-center align-items-center my-4 fs-3"></i>
            <div className="text mt-4 ms-3"><h6 className="mb-1">Deliver to</h6> <span>Address: Arusha</span></div>
          </div>

          <div className="col-md-12 mt-5">
            <TableContainer component={Paper} className='table border '>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Unit Price</TableCell>
                    <TableCell className="tableCell">Quantity</TableCell>
                    <TableCell className="tableCell">Total</TableCell>


                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableRow>


                    <TableCell className="cellWrapper">
                      <img src='https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg' alt="product" />
                      essam
                    </TableCell>
                    <TableCell className="tableCell">$2000</TableCell>
                    <TableCell className="tableCell">$556</TableCell>
                    <TableCell className="tableCell">$767756  </TableCell>
                  </TableRow>
                  <div >
                    <span className=" me-5">Subtotal: </span>
                    <span > $ 2000 </span>
                  </div>

                  <div >
                    <span className=" me-2">Shipping cost: </span>
                    <span > $ 2000 </span>
                  </div>
                  <div >
                    <span > Grand total: </span>
                    <span className=" fw-bold ms-4"> $ 2000 </span>
                  </div>
                  <div className=" mb-4">
                    <span className=" me-5 "> Status: </span>
                    <span className={Status === "Not paid" ? "Not_paid p-2 " : "paid p-2"}>
                      Payment done
                    </span>

                  </div>
                </TableBody>
              </Table>
            </TableContainer>
          </div >
          <div className="text-center ">
            <Link to={'/orders'} className="btn btn-dark text-white  m-auto  my-3">Back To Orders </Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderDedails