import Button from '@mui/material/Button';
import {useContext,useState} from "react";
import {Link} from "react-router-dom"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import CartContext from "../context/CartContext";
import {addDoc,collection,getFirestore} from "firebase/firestore"
import { IsFavorite } from '../functions/IsFavoriteFunction';
import { deleteFavorite,bringFavorites } from '../functions/FirebaseFunctions';


export default function Item({item}){

    const [open,setOpen]=useState(false);
    const [favorite,setFavorite]=useState(false);
   const{star,session,wishlist,setWishlist}=useContext(CartContext)
    const handleDetailsButton=()=>{
                setOpen(true);

    }

    
   const addToFavorites=()=>{
    const db=getFirestore()
    const favoritesCollection=collection(db,"favorites")

    const user=JSON.parse(sessionStorage.getItem("session"))
    
    const newFavorite={
      idItem:item.id,
      nombreItem:item.nombre,
      usuario:user[0].Email,
      img:item.img
    }
    addDoc(favoritesCollection,newFavorite).then((doc)=>console.log("se agrego el producto a favoritos"))
    bringFavorites(session.Email,setWishlist)
    setWishlist(wishlist)
    
   console.log(IsFavorite(wishlist,item,session))
   } 


   const removeFavorite=(item)=>{
    
    deleteFavorite(wishlist,session,item,setWishlist);
    bringFavorites(session.Email,setWishlist)
    setWishlist(wishlist)

   
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
                        {
                        star? 
                        <>{IsFavorite(wishlist,item,session)?<><IconButton onClick={()=>removeFavorite(item)} color="primary"><StarIcon/></IconButton></>
                        :
                        <><IconButton  alt="aderir a favoritos"  onClick={()=>addToFavorites(item)} color="primary"><StarBorderIcon/></IconButton></>}</> :
                        <></>
                        }
       
                        </div>
                  {/* <div><ItemCount stock={item.stock} initial={0}  id={item.id} onAdd={false} /></div>*/}

  
    </>)
}