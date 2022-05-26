import React, { Component } from "react";
import axios from "axios";

export default class PayMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          mobilenumber: "",
          amount:"",
          
        
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
      
        const {name, mobilenumber, amount}   = this.state;
       
        const data = {
          name:name,
          mobilenumber:mobilenumber,
          amount:amount
          
         
        };
        console.log(data);
    
        axios.post("http://localhost:8001/paymentmobile", data) 
        .then(res=>{alert("Payment success")
       
           });
        
      
        }

        
    
render(){
    return (
      <div>
        
         
        <center>
            <form style={{background:"#e6ffe6", margin:"50px", padding:"30px", width:"500px", borderRadius:"40px",borderLeft:"4px solid #4dff4d",borderRight:"4px solid #4dff4d"}}>
            <h1>Payment By Mobile</h1><br/>
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
            <label  class="form-label">Enter Mobile Number :</label><br/>
                  <input
                    type="number"
                    id="mobilenumber"
                    name='mobilenumber'
                    value={this.state.cvc}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                </div>
            
              <div class="mb-3">
            <label  class="form-label">Enter Amount:</label><br/>
                  <input
                    type="text"
                    id="amount"
                    name='amount'
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                </div>
            
                
             
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.onSubmit}
                >
                  Payment
                </button><br/><br/>
                </form>
            </center> 
        
      </div>
    );
  };
}

