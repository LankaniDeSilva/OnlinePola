import React, { useState } from "react";
import axios from 'axios';

const EmailSend = () =>{
    const [msg, setMsg] = useState('');
    const [user, setUser] = useState({
       
        subject: "",
        email:"",
        description: ""
    });

    const {subject, email, description} = user;

    const onInputChange = e =>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:8001/cart", user).then(response => setMsg(response.data.respMesg)
       
        );
      
    };

    return(
        <div className="container">
          <br/>
      <div class="row">  
      
       <div className="col-sm-4 mx-auto shadow p-5">
        <h4 className="text-center mb-2">Send Email </h4>
        <h6 className="text-center mb-2">You can ask information from admin. </h6>
           <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
         
          <div className="form-group  mb-4 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Subject"
              name="subject"
              onChange={onInputChange}
              value={subject}
            />
          </div>
          <div className="form-group  mb-4 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Email"
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </div>
          <div className="form-group  mb-4">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              onChange={onInputChange}
              value={description}
            />
          </div>
          
          <button onClick={onSubmit} className="btn btn-primary btn-block " style={{marginLeft:"100px"}}>Send Mail</button>
       
      </div>
    </div>
  </div>  
    )
}

export default EmailSend;