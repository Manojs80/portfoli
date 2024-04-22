import React, { useState } from 'react'
import {  Col, Row } from 'react-bootstrap'
import "./Contact.css";



function Contact() {

  const [contactformdata,setcontactformdata]=useState(
  {
  fullname:'',
  email:'',
  number:'',
  message:'',
 
  });
  const [error,setError]=useState(
  {
  fullname:'',
  email:'',
  number:'',
  message:'',
  });
  const newErrors = {
    fullname:'',
    email:'',
    number:'',
    message:'',
  }
  

  const handleSubmit = (e)=>{ 
    if(validateform()){
     console.log("form submitted",contactformdata);  
    }else{
      e.preventDefault();
    }
    
  }
  const formdata = (e)=>{
           const {name,value}= e.target; 
        setcontactformdata({...contactformdata,[name]:value})
  }
const validateform = ()=>{
  let valid = true;
   if(!contactformdata.fullname.trim()){
      newErrors.fullname = "Fullname is required";
      valid = false;
    }else if(contactformdata.fullname.length < 3){
       newErrors.fullname = "Fullname name should contain minimum 3 letters";
       valid = false;}
   if(!contactformdata.email.trim()){
      newErrors.email = "E-mail is required";
      valid = false;
    }else if(!/\S+@\S+\.\S+/.test(contactformdata.email) ){
       newErrors.email = "Please enter valid email";
       valid = false;}
   if(!contactformdata.number.trim()){
      newErrors.number = "Phone number is required";
      valid = false;  
   }else if(!/^\d{10}$/.test(contactformdata.number)){
       newErrors.number = "Phone number must be 10 digits";
         valid = false;}
   if(!contactformdata.message.trim()){
      newErrors.message = " Please write something";
      valid = false;
    }else if(contactformdata.message.length < 10){
       newErrors.message = "Please discribe more";
       valid = false;
    }
   setError(newErrors);
   return valid;
  }

  return (   
    <div className='container-fluid bg-black '>
      <Row className='justify-content-center bg-black' >
        <Col md={6} >
          <div className=' shadow  formbody' >
            <h1 style={{color:'violet'}}>CONTACT</h1>
            <form  className='form-container px-4 my-4 py-4 ' onSubmit={handleSubmit} > 
                <input type='text' name='fullname'  placeholder='NAME' color='red' onChange={formdata}/>
                <span className='error'>{error?.fullname?? ''} </span>
                <input type='email' name='email' placeholder='EMAIL' onChange={formdata}/>
                <span className='error'>{error?.email?? ''} </span>
                <input type='Number' name='number' placeholder='PHONE NUMBER' onChange={formdata} />
                <span className='error'>{error?.number?? ''} </span>
                <textarea type='text' rows={5} name='message' placeholder='WRITE YOUR MESSAGE HERE' onChange={formdata} ></textarea>
                <span className='error'>{error?.message?? ''} </span>
                 <button > <h5> <b style={{color:'green'}} >SEND MESSAGE </b></h5></button>
            </form>
          </div>
        </Col>    
      </Row>
   </div>
  )
}

export default Contact