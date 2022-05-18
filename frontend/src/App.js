import React, {Component} from "react";
//import "../bootstrap.min.css";
import {BrowserRouter,Route } from "react-router-dom";
import Home from "./Component/Home";
  import Header from "./Component/Header";
  import Login from "./Component/Login";
  import Register from "./Component/Register";
  import Footer from "./Component/footer";
  import ItemAdd from "./Component/ItemAdd";
  import Cart from "./Component/Cart";
  import CartAdd from "./Component/CartAdd";
  import ViewCart from "./Component/ViewCart";
import AddItem from "./Component/ItemAdd";

 
 

  


export default class App extends Component{
   render(){
    return (
      <BrowserRouter>
        <div>
         
           <Header/>

            {/*pamitha */}
             <Route path="/cart"  exact component={Cart}></Route>
             <Route path="/login"  exact component={Login}></Route>
             <Route path="/home"  exact component={Home}></Route>
             <Route path="/register"  exact component={Register}></Route>
             <Route path="/additem"  exact component={AddItem}></Route>
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

