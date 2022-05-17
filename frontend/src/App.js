import React, {Component} from "react";
//import "../bootstrap.min.css";
import {BrowserRouter,Route } from "react-router-dom";

  import Header from "./Component/Header";
  import Footer from "./Component/footer";
  import ItemAdd from "./Component/ItemAdd";
  import Cart from "./Component/Cart";
  import CartAdd from "./Component/CartAdd";
  import ViewCart from "./Component/ViewCart";

 
 

  


export default class App extends Component{
   render(){
    return (
      <BrowserRouter>
        <div>
         
           <Header/>

            {/*pamitha */}
             <Route path="/"  exact component={Cart}></Route>
             
             <Route path="/edit/:id"  exact component={CartAdd}></Route>
             <Route path="/edit/:id"  exact component={ViewCart}></Route>
           
    
         

             




            {/*Lankani */}

      
            

            


            {/*Ayeshi */}






            {/*Akeel */}
         
      

        
  
        
            <Footer/>
           
         </div>
      </BrowserRouter> 
     );
    }
 }

