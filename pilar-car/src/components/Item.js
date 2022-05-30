import Button from '@mui/material/Button';
import ItemCount from './ItemCount';

export default function Item({item}){


    return(<>
                 <div> <img alt={item.name} style={{height:"100px", width:"120px"}} src={item.img} /></div>
                      <div style={{textAlign:"center"}}> { item.name }</div>
                      <div style={{textAlign:"center"}}><Button variant="contained"  >Details</Button>  </div>
                      <div><ItemCount stock={item.stock} initial={0}  onAdd={false} /></div>

    </>)
}