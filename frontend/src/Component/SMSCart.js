import React,{useState} from "react";
import axios from "axios";

function Sms(){

  const [number, setnumber] = useState("");
  const [sendmsg, setsend] = useState("");
  

  function passData(){
    
    const newsms = {

     number,
     sendmsg
    }
   
    axios.post("http://localhost:8001/sms",newsms).then(()=>{
         alert("Send SMS")
         console.log(newsms);
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           <center>
            <br/>
             <form onSubmit={passData} style={{width:"600px",
                                              borderRadius:"40px", padding:"50px",
                                              background:"#ccffcc",
                                              borderLeft:"6px solid   #66ff66",
                                              borderBottom:"6px solid   #66ff66"}}>
              <center>
                    <h1>SMS Services</h1>
              </center>
              <br/>
             
             <br/>
             
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Enter Phone Number :</label>
              <input type="text" class="form-control" id="number" aria-describedby="emailHelp"
                   onChange={(e)=>{
                       setnumber(e.target.value);
              }} />
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Enter massege :</label>
                <input type="text" class="form-control" id="send"
                   onChange={(e)=>{
                       setsend(e.target.value);
              }} />
            </div>

          
            <button type="submit" class="btn btn-primary">Submit</button>
           </form>
          <br/>
          </center>
        </div>
    )
}

export default Sms;