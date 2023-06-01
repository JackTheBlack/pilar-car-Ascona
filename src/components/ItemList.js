
import Item from "./Item"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function ItemList({items}){





    return(<>
        
       
       <Box style={{flexGrow:1}}>
        <Grid container spacing={4}>
                {items.map((i)=>(<div key={i.name} style={{mappingTop:"10px",mappingBottom:"10px" , paddingLeft:"10%"}}>
                 <Grid item   xs={12} > <Item  item={i}/> </Grid>
                  </div> ))}
                  </Grid>    
            </Box>
           
    </>)
}