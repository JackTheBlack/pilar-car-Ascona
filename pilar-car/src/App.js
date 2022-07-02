
import './App.css';
import React, {useState} from "react"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContext from "./context/CartContext"
import DatosEnvio from './components/datosEnvio';


/*const array=[
  {name:"item1",img:"https://t1.uc.ltmcdn.com/es/posts/6/8/8/como_cambiar_las_bujias_de_la_moto_26886_600_square.jpg", stock:6},
  {name:"item2",img:"https://static.motor.es/fotos-diccionario/2019/11/bujia-tipos-averias-mantenimiento_1573747483.jpg", stock:3},
  {name:"item3",img:"https://http2.mlstatic.com/D_NQ_NP_721828-MLA40451035918_012020-O.jpg",stock:0}]
*/
  function App() {

    const [precioTotal,setPrecioTotal]=useState(0)    
    const [total,setTotal]=useState(0)
    const [orderId,setOrderId]=useState(null);
    const[cart,setCart]=useState([])
    
    const addItem=(item,q)=>{


     
      const newItem={nombre:item.nombre,
                      id:item.id,
                     cantidad:q,
                     precio:item.precio,
                     subtotal:item.precio*q
      }

      const index=cart.findIndex(i=>i.nombre===item.nombre)
      console.log(index)
      if (index===-1){
        let aux1=([...cart,newItem])
      //  console.log("this is cart",aux1)
        setCart([...cart,newItem])
        localStorage.setItem("cart",JSON.stringify(aux1),5000)
      //  console.log(aux1)
      }else{
        let aux=cart;
        const newQ=q+aux[index].cantidad
       
        aux[index]={nombre:item.nombre,
          cantidad:newQ,
          precio:item.precio,
          subtotal:item.precio*newQ }
          localStorage.setItem("cart",JSON.stringify(aux),5000)
        setCart([...aux])

      }
      localStorage.setItem("precioTotal",JSON.stringify(precioTotal+(q*item.precio)))
     setPrecioTotal(precioTotal+(q*item.precio)) 
     localStorage.setItem("totalDeItems",JSON.stringify(total+q))
     setTotal(total+q)
    
    }

  return (
   <CartContext.Provider value={{orderId,setOrderId,precioTotal,setPrecioTotal,total,setTotal,cart,addItem,setCart}}>
 


  
  <BrowserRouter>
  <div className="App">
    <NavBar/>

    
    <Routes>
    <Route exact path="/" element={<ItemListContainer/>}/>
    <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/datosEnvio" element={<DatosEnvio/>}/>
</Routes>  

  

  
 </div> 
    
   
    
 </BrowserRouter>
 </CartContext.Provider>
  );
}

export default App;
