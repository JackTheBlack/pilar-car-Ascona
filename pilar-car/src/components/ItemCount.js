import Button from '@mui/material/Button';
import {useState,useEffect} from "react";


export default function ItemCount({stock,initial,onAdd,id}){

    const [counter,setCounter]=useState(initial);
    const[disable,setdisable]=useState(onAdd);
    const [newStock,setNewStock]=useState(stock);
    
        const [chartItems,setChartItems]=useState(0); 

         const handleAddChart=()=>{
            if((counter+chartItems)<=stock){
                     
                      setChartItems(chartItems+counter);
                      setNewStock((newStock-counter))
                   
                  
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

    }
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: newStock })
    };
    fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/${id}`, requestOptions)
        .then(response => response.json())
        .then((data)=>{console.log(data) } )


},[disable,stock,chartItems,newStock])

useEffect(()=>{
  
const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ stock: newStock })
};
fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/${id}`, requestOptions)
    .then(response => response.json())
    .then((data)=>{console.log(data) } )


},[newStock])


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