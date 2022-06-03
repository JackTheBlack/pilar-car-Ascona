import React from "react";
import loadingBar from "../assets/loadingBar.gif"
import '../App.css';



export default function ItemDetail({id}){

  const[loaded,setLoaded]=React.useState(false);
  const [producto,setProducto]=React.useState();
 

    const getItemDetails=()=>{
        console.log(id)
        fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/${id}` )
        .then((resp)=>resp.json())
        .then((data)=>{console.log(data);setProducto(data);setLoaded(true) } )

    }


    React.useEffect(() => {
   
        getItemDetails();
       
      
    
    
    
      });

      return(
          <>
          {!loaded?<>    <img className='img2' alt={"Loading"} src={loadingBar} /> </>:
          <div>
          <p>Producto: {producto.nombre} </p>
          <img alt="producto" style={{height:"100px", width:"120px"}} src={producto.img} />      
          <p>categoria: {producto.categoria} </p>   
          <p>precio: {producto.precio} </p>   
          <p>stock: {producto.stock} </p>
          <p>marca: {producto.marca} </p>      
          </div> }
          
          </>
      );
}