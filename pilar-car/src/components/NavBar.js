import React,{useContext,useState,useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {Link,useNavigate} from "react-router-dom"
import CartContext from "../context/CartContext";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import LogForm from "./LogForm";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


export default function NavBar (){
  
  const navigate=useNavigate();
  const[auth,setAuth]=useState(JSON.parse(sessionStorage.getItem("session")))
  const [loginButton,setLoginButotn]=useState(true)
    const pages = ['carroceria', 'motor', 'accesorios'];
    const [open,setOpen]=useState(false);
    const {cart,setCart,total,setTotal}=useContext(CartContext);
    const handleClose=()=>{
        setOpen(false)
    }
   
    const handleLogOut=()=>{
          sessionStorage.removeItem("session")
          setCart([]);
          setAuth(null);
          setTotal(0);
          navigate("/")


    }

    useEffect(()=>{
      console.log("auth es: ",undefined)
      if(auth!==undefined){
            setLoginButotn(false)
            console.log("se habilita el boton login")
      }else{
        setLoginButotn(true)
      }
    },[auth])

  

    return(<>
      <header>
        <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        <Link style={{ textDecoration: 'none' }} to={`/`}>
        Pilar Car
        </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
             <Link style={{ textDecoration: 'none' }} to={`/category/${page}`}>
              <Button
                key={page}
                onClick={()=>console.log(page, "clciked")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          {auth!==null?      
                
                <>
                    {console.log("aca estamos",auth)}
                    <IconButton><AccountCircleRoundedIcon/> </IconButton>  <Button   sx={{color: 'white'}} variant="text"  onClick={()=>handleLogOut()} > Log out</Button>   
                     </>
      :   <Typography
      onClick={()=>setOpen(true)}
          sx={{
         mr: 2,
          fontWeight: 700,
         letterSpacing: '.3rem',
         color: 'inherit',
         textDecoration: 'none',
       }}
     >
 
<Button   sx={{color: 'white'}} variant="text"  > Log in</Button>  
 
     </Typography>
}

        {cart.length<1?<></>:<IconButton onClick={()=>navigate('/cart')} color="inherit">  <ShoppingCartIcon/>{total} </IconButton>}
          
        
        </Toolbar>
      </AppBar>
    </Box>
    </header>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 45,
  justifyContent:"center",
  itemAlign:"center",
  textAlign:"center",
  pt: 2,
  px: 4,
  pb: 3 }}>
         <LogForm setOpen={setOpen} setAuth={setAuth} />
        </Box>
      
      </Modal>
    </>
    );
}

