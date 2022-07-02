
import './style.css';
import React, {useContext,useState} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StepperBar from './Stepper';
import CartContext from "../context/CartContext";
import {getFirestore,getDoc,collection,addDoc,getDocs,query,documentId,where,writeBatch} from "firebase/firestore"
import { useNavigate } from 'react-router-dom';


export default function DatosEnvio()
{
    const navigate=useNavigate()
    const db=getFirestore();
    const [orden,setOrden]=useState()  
    const{orderId,setOrderId,setTotal,cart,precioTotal,setPrecioTotal,setCart}=useContext(CartContext)
    const session=JSON.parse(sessionStorage.getItem("session"))
    const batch=writeBatch(db)
    const [nombre,setNombre]=useState(session!==null?session[0].nombre:"")
    const [ciudad,setCiudad]=useState(session!==null?session[0].ciudad:"")
    const [direccion,setDireccion]=useState(session!==null?session[0].direccion:"")
 
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
       
    
        console.log("estoy a qsasasui")
       const order={comprador:{nombre:data.get('nombre'),ciudad:data.get('ciudad'),direccion:data.get('direccion')},orden:{...cart},Total:precioTotal}
       const ordersCollection=collection(db,"orders")     
       const productRef=collection(db,"productos")
       const q=query(productRef,where(documentId(),'in',cart.map(item=>item.id)))
       const productos=await getDocs(q)
       const outOfStock=[]
      
       console.log(order)
      
       
       productos.docs.forEach((doc)=>{
        const itemUpdate=cart.find(prod=>prod.id===doc.id)

        console.log("doc data")

        if ((doc.data().stock-itemUpdate.cantidad)>=0){
            batch.update(doc.ref ,{
                stock:doc.data().stock-itemUpdate.cantidad
            })

        }else{
            outOfStock.push(itemUpdate)
        }

        if(outOfStock.length===0){
            batch.commit()
            addDoc(ordersCollection,order).then((doc)=>{setOrderId(doc.id)})
            localStorage.removeItem('cart')
            console.log( "sdsdsd ",localStorage.getItem("cart"))
            setPrecioTotal(0)
            setTotal(0)
    
            setCart([])
           
           
        }else{
            if(outOfStock.length===1){
                console.log("item faltante" ,outOfStock)
                    let s=(`El siguiente item esta en falta ${outOfStock[0].nombre}` )
                alert(s)
            }
            if(outOfStock.length>1){
                let cadenaEnfalta="los items faltantes son: "
                for(let x=0;x<outOfStock.length+1;x++ ){
                    cadenaEnfalta=cadenaEnfalta.concat(" ",outOfStock[x].nombre)
                }
                alert(cadenaEnfalta)
            } 
        }


    })
      
      
      
    
  
  
       
       
    
      
     
    }

    return(<>
    <StepperBar/>
       
            {orderId===null?
            <> <Box className="OrderForm" component="form" onSubmit={handleSubmit} >
    
            {session!==null?<TextField disabled sx={{mt:1}} required id="outlined-required" label="Nombre" defaultValue={nombre} />
               :
               <TextField   name="nombre" margin="normal" sx={{mt:1}} required id="outlined-required" label="Nombre"/>  }
    
               <br></br>
                  <TextField
                     margin="normal"
                     sx={{mt:1}}
                    name="ciudad"
                  required
              id="outlined-required"
              label="Ciudad"
             defaultValue={ciudad}/>
            <br></br>
             <TextField
                name="direccion"
                margin="normal"
             sx={{mt:1}}
            
          required
      id="outlined-required"
      label="Direcion"
     defaultValue={direccion}
            />
            <br></br>
    
       
    
           <Button type="submit"  color="primary" variant="contained">
            SIGUIENTE
           </Button>
                
    
            </Box></>
            :
            <>
            <div style={{justifyContent:"center", textAlign:"center"}}>
                <h3>Su numero de orden es :{orderId} </h3>
                <Button variant="contained" onClick={()=>{setOrderId(null);navigate("/")}}>
                     Seguir comprando
                </Button>
            </div>

            </>}


        </>
    );



}