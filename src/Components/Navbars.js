import React, { useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Cart from './Cart.svg'
 

export default function Navbars() {
 
  const navigate=useNavigate();
  const auth=localStorage.getItem('username');
  const logout=()=>{
    localStorage.clear();
       navigate('/login')
  }
  return (
    <div> <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid justify-content-evenly">
      <Link className="navbar-brand" to='/'>Cart</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      {auth?<> <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='products'>Product</Link>
          </li>
          
           
        </ul>
        
        <div className='mx-4'  style={{height:"0.2"}}>
        <Link to="cart"> <img src={Cart} alt=" Error" height="30rem" /></Link>
         {/* <sup className='bg-danger text-white' style={{width:"10"}}> 7</sup> */}
        </div>
       
        <button className='btn btn-outline-primary '><Link className='nav-link' to='login' onClick={logout}>Logout</Link></button></>
        :<button className='btn btn-outline-primary float-right '>
        <Link className='nav-link' to='login'>Login</Link>
        </button>}
      </div>
    </div>
  </nav></div>
  )
}
