import React, { Component } from "react";
import axios from "axios";

export default class EditMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quentity: "",
      
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
  
    const { name, price, quentity } = this.state;

    const data = {
      name: name,
      price: price,
      quentity: quentity
    
    };
    console.log(data);

    axios.post(`http://localhost:8001/addcart`, data).then((res) => {
      if (res.data.success) {
        alert("Marks Updated Successfully");
        this.setState({
          name: "",
          price: "",
          quentity: "",
          
        });
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/cart/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          image:res.data.post.image,
          name:res.data.post.name,
          price:res.data.post.price,
          
          
        });
        console.log(this.state);
      }
    }); 
}

  render() {
  return (
    <div>
      <center>
        <br/>
            <center>
                  <h1 style={{ fontFamily: "Abel" }}>Your Cart</h1>
                </center>
                
              <form
               
                encType="multipart/form-data"
                style={{
                  margin: "0%",
                  padding: "50px",
                  border:"2px solid #66ff66",
                  backgroundColor: " ",
                  borderRadius: "40px",
                  width:"1000px"
                }}
              >
              <table>  
                <tr>
                  <td>
                  
                  </td>
                <td>
               
               
                <input
                  type="text"
                  id="name"
                  style={{
                    border: "2px solid white",
                   width:"120px"
                  
                  }}
                  name='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
               
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
               
               <lable>Rs.</lable>
                <input
                  type="text"
                  id="price"
                  style={{
                    border: "2px solid white",
                    width:"120px"
                  
                    
                  }}
                  name='price'
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
                
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
              
               
                <select class="form-select" aria-label="Default select example"
                  id="quentity"
                  
                  name='quentity'
                  value={this.state.quentity}
                  onChange={this.handleInputChange}
                >
                   <option selected>Select Quentity</option>
                   <option value="250">250g</option>
                   <option value="500">500g</option>
                   <option value="1000">1kg</option>
                   <option value="1500">1.5kg</option>
                   <option value="2000">2kg</option>
                </select>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                <lable>Rs.</lable>
                <input
                  type="text"
                  id=""
                  style={{
                    border: "2px solid white",  
                    width:"120px"
                  }}
                  value={this.state.price/100* this.state.quentity}
                />
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
              
                <center>
                  <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>
                    Submit
                  </button>
                </center>
                </td>
                </tr>
                </table>
              </form>
           
     <br/>
      </center>
    </div>
  );
}
}
