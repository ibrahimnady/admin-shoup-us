import '../Styles/orders.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const rows = [
  {
    name: "Acer Nitro 5",
    email: "John Smith@gmail.com",
    total: "$2000",
    Paid: "Paid At Today 23:56 AM",
    date: "1 March",
    status: "Delivered",
  },
  {
    name: "Acer Nitro 5",
    email: "John Smith@gmail.com",
    total: "$2000",
    Paid: "Not paid",
    date: "1 March",
    status: "Not Delivered",
  },


];
const Orders = () => {
  return (
    <div className='ordar'>
      <div className="dashboard container-fluid">
        <h1 className=" fs-2 fw-normal my-4"> Orders</h1 >
        <div className="row">
          <div className="col-md-12 bg-white mb-5 style_table">
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

            {/* table */}

            <TableContainer component={Paper} className='table border '>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Email</TableCell>
                    <TableCell className="tableCell">Total</TableCell>
                    <TableCell className="tableCell">Paid</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                    <TableCell className="tableCell text-center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}

                    >

                      <TableCell className="tableCell  ">
                        <div className="cellWrapper">
                          {row.name}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell ">{row.email}</TableCell>
                      <TableCell className="tableCell">{row.total}</TableCell>
                      {/* <TableCell className={row.Paid === "Not paid " ? "Not_paid bg-dark tableCell" : "paid tableCell"} >{row.Paid}</TableCell> */}

                      <TableCell >
                        <div className={row.Paid === "Not paid" ? "Not_paid p-2 text-center " : "paid p-2 text-center"}>
                          {row.Paid}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{row.date}</TableCell>

                      <TableCell >
                        <div className={row.status === "Delivered" ? "Delivered p-2 text-center" : "not_Delivered p-2 text-center"}>
                          {row.status}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell text-center">
                        <Link to={'/order'}><i className="fa-regular fa-eye text-success"></i></Link>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          {/* /table */}
        </div>
      </div>
    </div>
  )
}

export default Orders