import "../Styles/dashboard.css"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];
const rows = [
  {
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
  },


];
const Dashboard = () => {
  return <>
    <div className="dashboard container-fluid">
      <h2 className=" fs-5 fw-normal my-4"> Dashboard</h2>
      <div className="row">

        {/* total borde */}
        <div className="col-md-3 d-flex ms-lg-4 my-3  m-auto ms-md-0 ms-sm-0 total">

          <span  >
            <i className="fa-solid fa-hand-holding-dollar icon_Sales d-flex  justify-content-center align-items-center mt-4 fs-3"></i>

          </span>
          <div className="text mt-4 ms-3"><h6 className="mb-1">Total Sales</h6> <span>$22,678</span></div>
        </div>

        <div className="col-md-3 d-flex ms-lg-4 my-3 m-lg-auto m-md-0 m-sm-0 total" >
          <span  >
            <i className="fa-brands fa-shopify icon_Orders d-flex  justify-content-center align-items-center mt-4 fs-3"></i>

          </span>
          <div className="text mt-4 ms-3"><h6 className="mb-1">Total Orders</h6> <span>130</span></div>
        </div>

        <div className="col-md-3 d-flex ms-lg-4 my-3 m-lg-auto m-md-0 m-sm-0 total">
          <span  >
            <i className="fa-solid fa-basket-shopping icon_Prod d-flex  justify-content-center align-items-center mt-4 fs-3"></i>

          </span>
          <div className="text mt-4 ms-3"><h6 className="mb-1">Total Products</h6> <span>70</span></div>
        </div>

        {/*  /total borde */}

        {/*  recharts */}
        <div className="col-md-6 my-3 ms-lg-4 ms-md-0 ms-sm-0 bg-white pb-5 recharts_style">

          <h5 className="my-2 text-secondary">Last 6 Months (Revenue)</h5>
          <ResponsiveContainer width="100%"  >

            <AreaChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>

              </defs>
              <XAxis dataKey="name" stroke='gray' />

              <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* ----------------------------------------- */}

        <div className="col-md-5 my-3 ms-lg-4 ms-md-0 ms-sm-0 bg-white  recharts_style">

          <h5 className="my-2 text-secondary">Total Revenue</h5>


          <div className="bottom">
            <div className="featuredChart">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>

            <div className="text-center my-3">
              <p className="title text-secondary fw-bold">Total sales made today</p>
              <p className="amount fs-1 fw-bolder">$420</p>
              <p className="desc text-secondary">
                Previous transactions processing. Last payments may not be included.
              </p>
            </div>
            <div className='summary d-flex justify-content-center ' >
              <div className="item ">
                <div className="itemTitle ps-3">Target</div>
                <div className="itemResult negative d-flex">
                  <KeyboardArrowDownIcon fontSize="small" />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item mx-5">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive d-flex">
                  <KeyboardArrowUpOutlinedIcon fontSize="small" />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive d-flex">
                  <KeyboardArrowUpOutlinedIcon fontSize="small" />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="col-md-12 bg-white mb-5 style_table">

          <h5 className="my-3 text-secondary">Latest Transactions</h5>

          <TableContainer component={Paper} className='table border '>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Product</TableCell>
                  <TableCell className="tableCell">Customer</TableCell>
                  <TableCell className="tableCell">Date</TableCell>
                  <TableCell className="tableCell">Amount</TableCell>
                  <TableCell className="tableCell">Payment Method</TableCell>
                  <TableCell className="tableCell text-center">Action</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}

                  >

                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.img} alt="product" />
                        {row.product}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.customer}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.method}</TableCell>
                    
                      <TableCell className="tableCell text-center">
                      <Link to={'/order'}><i class="fa-regular fa-eye text-success"></i></Link> 
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


  </>

}

export default Dashboard