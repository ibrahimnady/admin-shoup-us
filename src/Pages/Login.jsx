import React from 'react'

export default function Login() {
    
    return (
        <>
            <div className=' container h-75 d-flex justify-content-center align-items-center'>
                <form action="" className='w-100'>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                    </div>
                    <button className=' btn btn-success mt-3' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}
