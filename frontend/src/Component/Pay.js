import React from "react";
import img1 from "./images/card_payment.jpg";
import img2 from "./images/mobile_payment.jpg";


const set ={
   
     
  }
 

function pay(){

    return(
        <div>
        <center>
            
            <hr style={{width:"1200px"}}/>
            <br/>
           <table>
               <tr>
                   <td style={{ background:"#e6ffe6", border:"4px solid #4dff4d",padding:"30px"}}>
                       
                        <tr>
                        <img src={img1} style={{width:"400px", height:"250px"}}/>
                        <br/>
                        <center>
                        
                        <a href="/payment">
                        <button class="btn btn-secondary" style={{ width:"200px", height:"40px"}}>Payment by Card</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{background:"#e6ffe6", border:"4px solid #4dff4d", padding:"30px"}}>

                        <tr>
                        <img src={img2} style={{width:"400px", height:"250px"}}/>
                        <center>
                        <br/>
                        <a href="/PayMobile">
                        <button class="btn btn-secondary" style={{ width:"200px", height:"40px"}}>Payment by Mobile</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   
                        
                  
                </tr>
                   
            </table>

        </center>
        </div>
    )
}
export default pay;