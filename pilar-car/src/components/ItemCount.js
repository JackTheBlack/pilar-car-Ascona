import Button from '@mui/material/Button';
import {useState,useEffect} from "react";


export default function ItemCount({stock,initial,onAdd}){

    const [counter,setCounter]=useState(initial);
    const[disable,setdisable]=useState(onAdd);

        const [chartItems,setChartItems]=useState(0); 

         const handleAddChart=()=>{
             setChartItems(chartItems+counter);
             console.log("acntidad de items ",chartItems)
         }   


        const handleAddButton=()=>{
            if(counter<stock){
                setCounter(counter+1);
            }
           
        }

        const handleRemoveButton=()=>{
            setCounter(counter-1);
        }

    useEffect(()=>{
        if(stock<1){
               setdisable(true);     
    }},[disable,stock])

    return(<div style={{border: "5px solid gray"}}>
           <div style={{backgroundColor:"white"}}>
           <Button onClick={()=>handleRemoveButton()}   style={{marginRight:"12%",marginLeft:"2px"}} variant="text">-</Button><span style={{textAlign:"center",marginRight:"12%"}}>{counter}</span><Button onClick={()=>handleAddButton()} style={{textAlign:"right"}}  variant="text">+</Button>
            </div> 
            <div>
           <Button  variant="outlined" disabled={disable} onClick={()=>handleAddChart()} >Agregar al Carrito</Button>
            </div> 
         
    </div>)
}