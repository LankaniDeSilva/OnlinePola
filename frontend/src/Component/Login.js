import React, { Component } from "react";
import axios from "axios";
import background from "./images/log.webp"

export default class Login extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
         
          email:"",
          password:"",
        
        };
      }
     
      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };
    
      onSubmit = (e) => {
        e.preventDefault();
      
        const {  email, password } = this.state;
    
        const data = {
        
          email:email,
          password:password
         
        };
        console.log(data);
    
        axios.post("http://localhost:8001/Login", data)
        .then(res=>{alert(res.data.message)
          this.props.history.push(`/home`)
          window.location.reload();
            })
          }
render(){
    return (
      <div  style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',
      backgroundSize: 'cover',
      margin:"20px",
      height:"500px",
      backgroundRepeat: 'no-repeat'}}>
        
        <center>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        
            <form style={{width:"300px", height:"300px",borderRadius:"40px", background:" #ccffcc", borderLeft:"4px solid  #4dff4d", borderRight:"4px solid #4dff4d"}} >
              <br/>
             <h1>Login</h1>
           
              <div class="flex gap-4 mb-2">
                <div class=" relative ">
                <label  class="form-label">Enter Email :</label><br/>
                <i class="fa-solid fa-user"></i>&nbsp;
                  <input
                    type="text"
                    id="email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                <label  class="form-label">Enter Password :</label><br/>
                <i class="fa-solid fa-key"></i>&nbsp;
                  <input
                    type="password"
                    id="password"
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div><br/>
              
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.onSubmit}
                >
                  Register
                </button>
              
                
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </center>
          
      </div>
    );
  };
}

