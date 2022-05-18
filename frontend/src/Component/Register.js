import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email:"",
          password:"",
          Repassword:"",
        
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
      
        const { name, email, password , Repassword } = this.state;
        if (password == Repassword){
        const data = {
          name:name,
          email:email,
          password:password,
          Repassword:Repassword
         
        };
        console.log(data);
    
        axios.post("http://localhost:8001/register", data) 
        .then(res=>{alert(res.data.message)
       
           })
         }else{
           alert("Password Not Match")
         }
        }

        
    
render(){
    return (
      <div>
        
         
        <center>
            <form style={{background:"#e6ffe6", margin:"50px", padding:"30px", width:"500px", borderRadius:"40px",borderLeft:"4px solid #4dff4d",borderRight:"4px solid #4dff4d"}}>
            <h1>Register</h1><br/>
            <div class="mb-3">
            <label  class="form-label">Enter Name :</label><br/>
                  <input
                    type="text"
                    id="name"
                    class=""
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                   
              </div>
            
              <div class="mb-3">
            <label  class="form-label">Enter Email Address :</label><br/>
                  <input
                    type="text"
                    id="email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                </div>
            
                <div class="mb-3">
            <label  class="form-label">Enter Password :</label><br/>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                </div>
             
                <div class="mb-3">
            <label  class="form-label">ReEnter Password :</label><br/>
                  <input
                    type="password"
                    id="Repassword"
                    name='Repassword'
                    value={this.state.Repassword}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                </div>
            
             
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.onSubmit}
                >
                  Register
                </button><br/><br/>
                <a href="/login">
                Already have an account..
                </a>
            </form>
            </center> 
        
      </div>
    );
  };
}

