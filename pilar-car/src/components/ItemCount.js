import Button from '@mui/material/Button';



export default function ItemCount({cartDisable, setCartDisable,stock,onAdd,id,counter,setCounter}){

    
                
        const handleAddButton=()=>{

            if((counter)<stock){
                setCounter(counter+1);
                setCartDisable(false);
            }

          
           
        }

        const handleRemoveButton=()=>{
            if (counter>0){
                setCounter(counter-1);
            }
           
        }





    return(<div style={{justifyContent:"center",textAlign:"center"}}>
            <section>stock disponible:{stock} </section>
           <div style={{backgroundColor:"white"}}>
           <Button onClick={()=>handleRemoveButton()}   style={{marginRight:"12%",marginLeft:"2px"}} variant="text">-</Button><span style={{textAlign:"center",marginRight:"12%"}}>{counter}</span><Button onClick={()=>handleAddButton()} style={{textAlign:"right"}}  variant="text">+</Button>
            </div> 
         
     
             
        
    </div>)
}