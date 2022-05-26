import React, { Component } from "react";
import axios from "axios";

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardnumber: "",
          amount:"",
          cvc:"",
          holder:"",
        
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
      
        const {cardnumber, amount, cvc, holder}   = this.state;
       
        const data = {
          cardnumber:cardnumber,
          amount:amount,
          cvc:cvc,
          holder:holder
         
        };
        console.log(data);
    
        axios.post("http://localhost:8001/payment", data) 
        .then(res=>{alert("Payment success")
       
           });
        
      
        }

        
    
render(){
    return (
      <div>
        
         
        <center>
            <form style={{background:"#e6ffe6", margin:"50px", padding:"30px", width:"500px", borderRadius:"40px",borderLeft:"4px solid #4dff4d",borderRight:"4px solid #4dff4d"}}>
            <h1>Payment</h1><br/>
            <div class="mb-3">
            <label  class="form-label">Enter Cardnumber :</label><br/>
                  <input
                    type="text"
                    id="cardnumber"
                    class=""
                    name="cardnumber"
                    value={this.state.cardnumber}
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
            
                <div class="mb-3">
            <label  class="form-label">Enter CVC :</label><br/>
                  <input
                    type="number"
                    id="cvc"
                    name='cvc'
                    value={this.state.cvc}
                    onChange={this.handleInputChange}
                    style={{width:"350px", height:"36px"}}
                  />
                </div>
             
                <div class="mb-3">
            <label  class="form-label">Enter Holder:</label><br/>
                  <input
                    type="text"
                    id="holder"
                    name='holder'
                    value={this.state.holder}
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

