import React, { Component } from "react";
import axios from "axios";

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getcart").then((res) => {
      if (res.data.success) {
        this.setState({
          marks: res.data.existingPosts,
         
        });
        console.log(this.state.marks);
      }
    });
  }
  onDeleteCart = (id) => {
    axios.delete(`http://localhost:8001/deletecartitem/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  onDelete = () => {
    axios.delete("http://localhost:8001/deletecart").then((res) => {
      alert("All cart Delete");
      this.retrivePosts();
    });
  };

  render() {
    return (
      <div >
     
        <br />
        <a href="/cartemail">
        <button
                    type="button"
                    className="btn btn-primary"
                    style={{marginLeft:"200px"}}
                   
                  >
                    <i class="fa-solid fa-envelope"></i> Email
                  </button>
                 </a>
                 <a href="/sms">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{marginLeft:"200px"}}
                   
                  >
                    <i class="fa-solid fa-comment-sms"></i> SMS
                  </button>
                  </a><br/><br/>
        <button
                    type="button"
                    className="btn btn-warning"
                    style={{marginLeft:"200px"}}
                    onClick={() => this.onDelete()}
                  >
                    <i className="fas fa-trash-alt"></i> Clear Cart
                  </button>
                  <br/><br/>
                  <center>
        <table class="table table-sm"
         
          style={{ width: "1100px", padding:"50px" }}
        >
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUENTITY</th>
              <th scope="col">TOTAL</th>
            
            </tr> 
          </thead>
          <tbody>
            {this.state.marks.map((marks, index, sum) => (
              <tr>
                <th scope="row">{index + 1}</th>
                
                <td>{marks.name}</td>
                <td>{marks.price}</td>
                <td>{marks.quentity/1000}KG</td>
                <td>RS.{marks.quentity*marks.price/100}</td>
                
              
                 
                <td>
                  
                 
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDeleteCart(marks._id)}
                  >
                    <i class="fa-solid fa-xmark"></i> 
                  </button>
                </td>
                <hr/>
              </tr>
                
            ))}
            
          </tbody>
         
        </table>
   <br/>
            <a href="/Payment">
            <button type="button" className="btn btn-success">Payment</button>
            </a>  
            </center>
        
      </div>
    );
  }
}
