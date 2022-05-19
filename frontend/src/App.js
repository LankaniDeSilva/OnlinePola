import React, {Component} from "react";
//import "../bootstrap.min.css";
import {BrowserRouter,Route } from "react-router-dom";
import Home from "./Component/Home";
  import Header from "./Component/Header";
  import Login from "./Component/Login";
  import Register from "./Component/Register";
  import Footer from "./Component/footer";
  import Cart from "./Component/Cart";
  import CartAdd from "./Component/CartAdd";
  import ViewCart from "./Component/ViewCart";
import AddItem from "./Component/ItemAdd";
import CartEmail from "./Component/CartEmail";
import SMSCart from "./Component/SMSCart";

  import Shipping from "./Component/Shipping";
import EmailSend from "./Component/EmailSend";

import Payment from "./Component/Payment";
import ViewItem from "./Component/ViewItem";
import UpdateItem from "./Component/UpdateItem";
 
 

  


export default class App extends Component{
   render(){
    return (
      <BrowserRouter>
        <div>
         
           <Header/>

            {/*pamitha */}
             <Route path="/cart"  exact component={Cart}></Route>
             <Route path="/sms"  exact component={SMSCart}></Route>
             <Route path="/login"  exact component={Login}></Route>
             <Route path="/home"  exact component={Home}></Route>
             <Route path="/cartemail"  exact component={CartEmail}></Route>
             <Route path="/register"  exact component={Register}></Route>
            

             <Route path="/edit/:id"  exact component={CartAdd}></Route>
             <Route path="/edit/:id"  exact component={ViewCart}></Route>
            
           
    
         

             




            {/*Lankani */}

            <Route path="/shipping"  exact component={Shipping}></Route>
            <Route path="/email"  exact component={EmailSend}></Route>
      
            

            


            {/*Ayeshi */}


            <Route path="/payment"  exact component={Payment}></Route>



            {/*Akeel */}
            <Route path="/additem"  exact component={AddItem}></Route>
             <Route path="/viewItem"  exact component={ViewItem}></Route>
             <Route path="/updateitem/:id"  exact component={UpdateItem}></Route>


        
  
        
            <Footer/>
           
         </div>
      </BrowserRouter> 
     );
    }
 }

