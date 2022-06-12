import React,{useState} from "react";
import loadingBar from "../assets/loadingBar.gif"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import '../App.css';
import ItemCount from "./ItemCount";




export default function ItemDetail({id}){

  const[loaded,setLoaded]=React.useState(false);
  const [producto,setProducto]=React.useState();
  const [counter,setCounter]=useState(1);

    const getItemDetails=()=>{
        console.log(id)
        fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/${id}` )
        .then((resp)=>resp.json())
        .then((data)=>{console.log(data);setProducto(data);setLoaded(true) } )

    }


    React.useEffect(() => {
   
      
        getItemDetails();
       
      
    
    
    
      },[loaded]);

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
          <ItemCount stock={producto.stock} onAdd={false} counter={counter} setCounter={setCounter} />   
          <Link to={`/cart`}>
          <Button  variant="outlined"  onClick={()=>console.log("terminar compra")} >Terminar compra</Button>
          </Link>
          </div> }

          </>
      );
}