import Button from '@mui/material/Button';
import ItemCount from './ItemCount';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ItemDetailContainer from './ItemDetailContainer'; 

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
                      <div style={{textAlign:"center"}}><Button variant="contained" onClick={()=>handleDetailsButton()}  >Details</Button>  </div>
                      <div><ItemCount stock={item.stock} initial={0}  id={item.id} onAdd={false} /></div>

                <div>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <ItemDetailContainer id={item.id} />
        </Box>

      </Modal>
                </div>

    </>)
}