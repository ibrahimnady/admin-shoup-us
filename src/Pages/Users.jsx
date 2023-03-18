import '../Styles/users.css'

import clinet from '../images/member-1.jpg'
const Users = () => {
  return (
    <div className='users'>
      <div className='  container-fluid'>

        <h2 className=" fs-3 fw-normal my-4"> Customers</h2>
        <div className="row">
          <div className="col-md-12 user_header py-3  ">
            <div className="row">
              <div className='col-md-8 mb-3 text-sm-center '>
                <input type="text" placeholder="Search..." className="form-control w-100" />

              </div>
              <div className="col-md-4">
                <div className='d-flex '>
                  <select className="form-select me-3">
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                    <option>Show all</option>
                  </select>
                  <select className="form-select ">
                    <option>Status: all</option>
                    <option>Active only</option>
                    <option>Disabled</option>
                  </select>
                </div>
              </div>

            </div>



          </div>
          <div className="col-md-12  all_users py-5">
            <div className="row">


              <div className="col-md-4  ">
                <div className=' user ps-2  pt-3  mb-4'>
                  <div className=' w-100 text-center'>
                    <img src={clinet} alt="" className='mb-3  ' />

                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <span className='w-50'>
                      <i className="fa-solid fa-user"></i> <span >Name :</span>

                    </span>
                    <span className='w-50'> Essam Ali</span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span className=''>
                      <i className="fa-solid fa-envelope"></i> <span > Email :</span>

                    </span>

                    <span className='w-50'>Essam Ali@gmail.com</span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span className='w-50'> <i className="fa-solid fa-phone"></i> <span > Numper :</span></span>
                    <span className='w-50'>01098820877</span>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <span className='w-50'>
                      <i className="fa-solid fa-location-dot"></i> <span > Address :</span>

                    </span>
                    <span className='w-50'>  Haram street -giza- egypt</span>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Users