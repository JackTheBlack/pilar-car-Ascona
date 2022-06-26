import Button from '@mui/material/Button';
import ItemCount from './ItemCount';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ItemDetailContainer from './ItemDetailContainer'; 
import {Link} from "react-router-dom"



export default function Item({item}){

    const [open,setOpen]=useState(false);

    const handleDetailsButton=()=>{
                setOpen(true);

    }


    
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    const handleClose = () => setOpen(false);


    
    return(<>
                 <div> <img alt={item.name} style={{height:"100px", width:"120px"}} src={item.img} /></div>
                      <div style={{textAlign:"center"}}> { item.nombre }</div>
                      <div style={{textAlign:"center"}}>
                        <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}> 
                        <Button variant="contained" onClick={()=>console.log("hola mundo")}  >Details</Button>  
                        </Link>
                        </div>
                  {/* <div><ItemCount stock={item.stock} initial={0}  id={item.id} onAdd={false} /></div>*/}

                <div>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3, width: 200 }}>
       <ItemDetailContainer id={item.id} />
        </Box>

      </Modal>
                </div>

    </>)
}