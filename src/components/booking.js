import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DateObject from "react-date-object";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Payment from '../payment';
import CarDetails from './singleCar';
export default function BookCar(){
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");
    const[time,setTime]=useState("");
    
    const navigate=useNavigate();
    const location=useLocation();
    const [date1,setDate1]=useState("");
    const [date2,setDate2]=useState("");
    var pdata={name,phone,time,date1,date2};
    console.log(pdata);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // validating data
        if (name==="" || email==="" || phone==="" || time==="" ||date1==="" ||date2==="") {
          alert("Please verify your inputs ...");
          return null;
        }
        else{
          alert("Now pay the amount to complete booking!");
          navigate("/payments",{state:{pdata}});
        }
      }
    return(
        <div className="container-fluid bg-white mb-5">
            <h2 className='font-bold text-center text-5xl . py-5 hover:underline  delay-400'>Car Rental Form</h2>

            <div className='row '>
                <div className='col-md-4 bg-gray-200'>
                    <div className='img mt-2'>
                        <img src={location.state.data.img} style={{height:"250px"}} className='w-full h-full'/>

                        <table className="table table-borderless m-5 ">
                        <tbody>
                            <tr>
                                <th>Number Plate:</th>
                                <td>{location.state.data.R_num}</td>
                            </tr>
                            <tr>
                                <th>Car Modal:</th>
                                <td>{location.state.data.name}</td>
                            </tr>
                            <tr>
                                <th>Company:</th>
                                <td>{location.state.data.company}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className='col-md-8 bg-[#374151]'>
                <Form className=' text-white  p-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <div className='row'>
                        
                        <div className='col-md-4'>
                        <Form.Label>Full Name*</Form.Label>
                        <Form.Control type="Full Name" placeholder="Enter Full name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='col-md-4'>
                        <Form.Label>Phone Number*</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone number" onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className='col-md-4'>
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className='row'>
                        
                        <div className='col-md-6'>
                        <Form.Label>From Date*</Form.Label>
                        <Form.Control type="date" placeholder="Enter From Date" onChange={(e)=>setDate1(e.target.value)}/>
                        </div>
                        <div className='col-md-6'>
                        <Form.Label>To Date*</Form.Label>
                        <Form.Control type="date" placeholder="Enter To Date" onChange={(e)=>setDate2(e.target.value)}/>
                        </div>
                        
                    </div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <div className='row'>
                        
                        <div className='col-md-6'>
                        <Form.Label>Pick-up time*</Form.Label>
                        <Form.Control type="time" placeholder="Enter pick-up time" onChange={(e)=>setTime(e.target.value)}/>
                        </div>
                        <div className='col-md-6'>
                        <Form.Label>Total Price$*</Form.Label>
                        <Form.Control type="" placeholder=" " id='price' value={location.state.data.price}/>
                        </div>
                        
                    </div>
                </Form.Group>
                
                <div className='row'>
                        
                        <div className='col-md-6'>
                            <Button className='bg-danger' type="submit" onClick={()=>navigate("/")}>
                                cancel booking
                            </Button>
                        </div>
                        <div className='col-md-6'>
                            <Button className='bg-primary' type="submit">
                                Submit
                            </Button>
                        </div>
                        
                    </div>
           </Form>
                </div>
            </div>
        </div>
    );
}