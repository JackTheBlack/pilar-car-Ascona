import Button from '@mui/material/Button';
import {useState,useEffect} from "react";


export default function ItemCount({stock,initial,onAdd}){

    const [counter,setCounter]=useState(initial);
    const[disable,setdisable]=useState(onAdd);
   
    
        const [chartItems,setChartItems]=useState(0); 

         const handleAddChart=()=>{
            if((counter+chartItems)<=stock){
                 
                      setChartItems(chartItems+counter);
                  
            }
           
            
         }   

                
        const handleAddButton=()=>{

            if((counter+chartItems)<stock){
                setCounter(counter+1);
            }

          
           
        }

        const handleRemoveButton=()=>{
            if (counter>0){
                setCounter(counter-1);
            }
           
        }

    useEffect(()=>{
        if((stock-chartItems)<1){
               setdisable(true);     
    }},[disable,stock,chartItems])

    return(<div style={{border: "5px solid gray"}}>
            <section>stock disponible:{stock-chartItems} </section>
           <div style={{backgroundColor:"white"}}>
           <Button onClick={()=>handleRemoveButton()}   style={{marginRight:"12%",marginLeft:"2px"}} variant="text">-</Button><span style={{textAlign:"center",marginRight:"12%"}}>{counter}</span><Button onClick={()=>handleAddButton()} style={{textAlign:"right"}}  variant="text">+</Button>
            </div> 
            <div>
           <Button  variant="outlined" disabled={disable} onClick={()=>handleAddChart()} >Agregar al Carrito</Button>
            </div> 
        
    </div>)
}