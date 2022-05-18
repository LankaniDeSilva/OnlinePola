import React,{useState} from "react"
import axios from "axios";


 function AddItem(){

         
          const [name, setname] = useState("");
          const [price, setprice] = useState("");
          const [quentity, setquentity] = useState("");
          const [image, setimage] = useState("");

          const onChangeFile = (e) =>{
           setimage(e.target.files[0]);
          };
     
          const sendData = (e) =>{
           e.preventDefault();

          const formdata = new FormData();

          formdata.append("name", name);
          formdata.append("price", price);
          formdata.append("quentity", quentity);
          formdata.append("file", image);
   
          setname("");
          setprice("");
          setquentity("");
          setimage("");
         
          axios.post("http://localhost:8001/save/image", formdata).then(()=>{
               alert("Add Item to cart");

               setname("");
               setprice("");
               setquentity("");
               setimage("");

          }).catch((err)=>{
               alert(err)
          });
          }
       
    return(
       <div>
         <center>
      <table>
        <tr>
          <td>
      <form onSubmit={sendData} encType="multipart/form-data" style={{margin:"0%", padding:"50px", backgroundColor:'',border:"2px solid blue", borderRadius:"10px" }}>
   
       <center>
         <h1 style={{fontFamily:"Abel"}}>Add Product</h1>
       </center>
         <label style={{fontSize:"20px"}}>Enter Name : </label><br/>
         <input type="text" id="name"  style={{borderRadius:"15px", width:"400px", height:"40px"}}
           onChange={(e)=>{
              setname(e.target.value);
          }} /><br/>

        <label style={{fontSize:"20px"}}>Select Price : </label><br/>
        <input type="text" id="price"  style={{borderRadius:"15px", width:"400px", height:"40px", padding:"10px"}}
           onChange={(e)=>{
              setprice(e.target.value);
         }} /><br/>

        <label style={{fontSize:"20px"}}>Enter Quentity : </label><br/>
        <input id="editor" name="quentity" style={{borderRadius:"15px", width:"400px", height:"40px"}}
            onChange={(e)=>{
                setquentity(e.target.value);
         }} />
  
          <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="file" filename="file"
                onChange={onChangeFile} />
            </div>
              
         <br/><br/>
         <center>
            <button type="submit" class="btn btn-primary" >Submit</button>
         </center>
        </form>
        
        </td>
       
        </tr>
       </table>
</center>



</div>
    )
}
export default AddItem;