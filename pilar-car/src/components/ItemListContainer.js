import ItemCount from "./ItemCount";
import React from "react";


export default function ItemListContainer({greetings}){
   


  

    return(<>
            <div style={{display:"flex", justifyContent:"center"}}>
                {greetings.map((i)=>(<div  style={{ paddingLeft:"10%"}}>
                     <div> <img alt={i.name} style={{height:"100px", width:"120px"}} src={i.img} /></div>
                      <div style={{textAlign:"center"}}> { i.name }</div>
                       <div><ItemCount stock={i.stock} initial={0}  onAdd={false} /></div> </div> ))}
            </div>




    </>);
}