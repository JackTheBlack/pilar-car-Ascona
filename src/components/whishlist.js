import CartContext from "../context/CartContext";
import {useContext} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Wishlist(){

    const {wishlist}=useContext(CartContext)

    return(
    <>
    <h1>WishList</h1>
    <Box style={{flexGrow:1}}>
        <Grid container spacing={4}>
                {wishlist.map((i)=>(<div key={i.nombreItem} style={{mappingTop:"10px",mappingBottom:"10px" , paddingLeft:"10%"}}>
                 <Grid item   xs={12} >
                 <div> <img alt={i.nombreItem} style={{height:"100px", width:"120px"}} src={i.img} /></div>
                      <div style={{textAlign:"center"}}> { i.nombreItem }</div>
                      <div style={{textAlign:"center"}}></div>

                 </Grid>
                  </div> ))}
                  </Grid>    
            </Box>
    </>)
}