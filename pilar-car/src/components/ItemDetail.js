import React,{useState,useContext} from "react";
import loadingBar from "../assets/loadingBar.gif"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import '../App.css';
import ItemCount from "./ItemCount";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext  from "../context/CartContext";

import {addDoc,collection,getFirestore, doc,getDoc } from "firebase/firestore";
import { db} from "../firebase/config" 




export default function ItemDetail({id}){


  const[loaded,setLoaded]=React.useState(false);
  const [producto,setProducto]=React.useState();
  const [counter,setCounter]=useState(0);
  const [cartDisable,setCartDisable]=useState(true);
  const [terminarCompraDisable,setTerminarCompraDisable]=useState(true);
  const {addItem,cart}=useContext(CartContext)
  const [item,setItem]=useState();


    const getItemDetails=()=>{
        fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/${id}` )
        .then((resp)=>resp.json())
        .then((data)=>{setProducto(data);setLoaded(true) } )

    }


    const handleAddCart=()=>{
      setCounter(0);
      setCartDisable(true)
      setTerminarCompraDisable(false);
       addItem(producto,counter);
     
      }


  /*  React.useEffect(() => {
   
      
        getItemDetails();
       
      

        if (counter===0){
          setCartDisable(true)
        }
    
    
      },[loaded,counter]);*/

     

      React.  useEffect(()=>{
        const productosRef=doc(db,"productos",id)
  
  
            getDoc(productosRef).then((doc)=>{
              
              
              setProducto({ id:doc.id,
              ...doc.data()})


              console.log({ id:doc.id,
                ...doc.data()})     
                
            }).finally(()=>{setLoaded(true)})
               
        },[])
  
  
  
    
  
     
     
      return(
          <>
           
          {!loaded?<>    <img className='img2' alt={"Loading"} src={loadingBar} /> </>:
          <div  style={{justifyContent:"center",textAlign:"center", alignItems:"center"}} >
         <div > Producto: {producto.nombre} </div><br></br>
         <div>
         <img alt="producto" style={{height:"100px", width:"120px"}} src={producto.img} />   
           </div>   
          <p>categoria: {producto.categoria}    </p>
          <p>precio: {producto.precio} </p>   
          <p>stock: {producto.stock} </p>
          <p>marca: {producto.marca} </p>   
          {terminarCompraDisable? 
          <ItemCount cartDisable={cartDisable} setCartDisable={setCartDisable} stock={producto.stock} onAdd={false} counter={counter} setCounter={setCounter} />   
         :<></>}
          {cartDisable? <></>:  <Button  variant="contained" onClick={()=>handleAddCart()}>Adehrir al carrito<AddShoppingCartIcon/> </Button>}
        
          <br></br>
          <br></br>
          {terminarCompraDisable? <></>:
          <Link style={{ textDecoration: 'none' }} to={`/cart`}>
          <Button  variant="outlined"  onClick={()=>console.log("terminar compra")} >Terminar compra</Button>
          </Link>}
          </div> }

          </>
      );
}