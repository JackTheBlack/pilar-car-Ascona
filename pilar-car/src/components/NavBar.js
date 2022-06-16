import React,{useContext} from "react";
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




export default function NavBar (){
    const pages = ['Carroceria', 'Motor', 'Accesorios'];

    const {cart,total}=useContext(CartContext);

    


    let navigate=useNavigate();

    return(
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

        {cart.length<1?<></>:<IconButton onClick={()=>navigate('/cart')} color="inherit">  <ShoppingCartIcon/>{total} </IconButton>}
          
        
        </Toolbar>
      </AppBar>
    </Box>
    </header>
    );
}

