import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const UserList = () => {
   const [details, setDetails] = useState([]); 
  
   const getDetails = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       setDetails(await response.json());
   } 
   
   useEffect(() => {
       getDetails();
   }, []);
    
  return (
    <>
          <h1 className='mt-5 text-center fw-bold p-3 border bg-secondary text-white'> List of User and Their Information</h1>
          <div className="container-fluid mt-5">
                <div className="row">
                     {
                         details.map((curElem) => {
                             const {name, email, address, phone, website, company} = curElem;
                             return (
                                 <>
                                    <div className="col-10 col-md-4">
                                        <div className="card p-2 ms-2 my-5 border-secondary">
                                            <div className="d-flex align-items-center">
                                                <div className="w-50"> <img src="./images/user1.jfif" className='w-100 img-fluid rounded' alt="" /> </div>
                                                <div className="ms-4 w-100">
                                                    <h2 className='fw-bolder mb-2'>{name}</h2>
                                                    <h5 className='fw-bold mb-1'>Email:- <p className="text-secondary ms-3 mb-0">{email}</p></h5>
                                                    <p className='fw-bold mb-1'>Phone Number:- <span className="text-secondary ms-2"> {phone} </span></p>
                                                    <p className='fw-bold mb-1'>Website:- <span className="text-secondary ms-2"> {website} </span></p>
                                                    <p className='fw-bold mb-1'>Company Name:- <span className="text-secondary ms-2">{company.name}</span></p>
                                                    <p className='fw-bold mb-1'>Address:- <span className="text-secondary ms-2">{address.suite}, {address.street}, {address.city}</span></p>
                                                </div>
                                            </div>
                                        </div>                                  
                                    </div>
                                 </>
                             )
                         })
                     }
                   
                    
                    
                </div>
          </div>   
    </>
  )
}

export default UserList;
