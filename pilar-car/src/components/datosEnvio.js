
import './style.css';
import React, {useContext,useState} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StepperBar from './Stepper';
import CartContext from "../context/CartContext";
import {getFirestore,getDoc,collection,addDoc} from "firebase/firestore"



export default function DatosEnvio()
{
    const [orden,setOrden]=useState()  
    const{cart,precioTotal}=useContext(CartContext)
    const session=JSON.parse(sessionStorage.getItem("session"))
    const [nombre,setNombre]=useState(session!==null?session[0].nombre:"548748")
    const [ciudad,setCiudad]=useState(session!==null?session[0].ciudad:"")
    const [direccion,setDireccion]=useState(session!==null?session[0].direccion:"")
 
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
       
       const order={comprador:{nombre:nombre,ciudad:ciudad,direccion:direccion},orden:{...cart},Total:precioTotal}
       console.log(order)
        const db=getFirestore();
        const ordersCollection=collection(db,"orders")
        addDoc(ordersCollection,order).then(console.log("hola"))
  
  
       
       
    
        
    }

    return(<>
    <StepperBar/>
        <Box className="OrderForm" component="form" onSubmit={handleSubmit} >
    
        {session!==null?<TextField disabled sx={{mt:1}} required id="outlined-required" label="Nombre" defaultValue={nombre} />
           :
           <TextField    margin="normal" sx={{mt:1}} required id="outlined-required" label="Nombre"/>  }

           <br></br>
              <TextField
                 margin="normal"
                 sx={{mt:1}}
                
              required
          id="outlined-required"
          label="Ciudad"
         defaultValue={ciudad}/>
        <br></br>
         <TextField
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
            

        </Box>
        </>
    );



}