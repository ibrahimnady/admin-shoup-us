import './App.css';
import Header from './Components/Header/Header';
import ScrollToTop from './ScrollToTop';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';
import Categories from './Pages/Categories';
import NavSide from './Components/NavSide/NavSide';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';
import OrderDedails from './Pages/OrderDedails';
import Users from './Pages/Users';
import Login from './Pages/Login'

function App() {
  return (
    <>
      <div className='APP_bg'>
        <div className='d-flex '>
          <NavSide />
          <div className='w-100'>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='Dashboard' element={<Dashboard />} />
              <Route path='Orders' element={<Orders />} />
              <Route path='order' element={<OrderDedails />} />
              <Route path='Users' element={<Users />} />
              <Route path='Products' element={<Products />} />
              <Route path='AddProduct' element={<AddProduct />} />
              <Route path='Products/AddProduct' element={<AddProduct />} />
              <Route path='Categories' element={<Categories />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
