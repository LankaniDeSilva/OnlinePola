
import React, { Component } from "react";
import axios from "axios";

export default class GetCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
     carts: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getcarts").then((res) => {
      if (res.data.success) {
        this.setState({
         carts: res.data.existingPosts,
        });
        console.log(this.state.carts);
      }
    });
  }

  filterData(pdfs, searchKey) {
    const result = pdfs.filter(
      (pdf) => pdf.name.includes(searchKey) 
    );
    this.setState({carts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getcarts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };



  render() {
    return (
      <div>
        <br />
        
          
          <br />
          <center>
          <div className="search" style={{ width: "400px",paddingLeft:"50px" }}>
            <lable>Search Items :</lable>
            <input
              type="search"
              class="form-control"
              name="searchQuary"
              onChange={this.handleSearchArea}
            />
          </div>
          <table
           
          >
            
            <tbody>
              {this.state.carts.map((carts, index) => (
                 <td>
                 <div
                   style={{
                     border: "2px solid #00b300",
                     borderRadius:"40px",
                     margin: "20px",
                     padding: "20px",
                   }}
                 >
                   <center>
                     <tr>
                       <h3>
                         <b>{carts.name}</b>
                       </h3>
                     </tr>
                     <img
                       src={process.env.PUBLIC_URL + `/uploads/${carts.image}`}
                       style={{ width: "230px", height: "200px" }}
                     />
                   </center>

                   <tr>
                     {" "}
                     &nbsp;&nbsp; <td>{carts.quentity}g</td>
                     <td style={{ paddingLeft: "120px" }}>Rs.{carts.price} </td>
                   </tr>
                   <br />
                   <center>
                     <tr>
                   
                         
                       <a href={`/edit/${carts._id}`}>
                         <button type="submit"  class="btn btn-success">
                           Add To Cart
                         </button>
                        
                       </a>
                       
                     </tr>
                   </center>
                 </div>
               </td>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

