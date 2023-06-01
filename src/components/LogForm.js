import  React, {useState,useEffect, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CartContext from '../context/CartContext';
import {bringFavorites} from "../functions/FirebaseFunctions"


const theme = createTheme();

export default function LogForm({setOpen,setAuth}) {

   const [usuario,setUsuario]=useState();
  const  [email,setEmail]=useState();
  const [pass,setPass]=useState();
  const {setStar,wishlist,setWishlist}=useContext(CartContext)


    const getUser=async(password)=>{
      console.log(email)
      await  fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/users?Email=${email}` )
        .then((resp)=>resp.json())
        .then((data)=>{ 
          console.log(data)
          console.log(password)
          if (data[0].contrasenia===password){
            setUsuario(data)
            const storage=sessionStorage.setItem("session",JSON.stringify(data))
            setAuth(JSON.parse(sessionStorage.getItem("session")))
            setOpen(false);
            setStar(true);
          
          }else{
            console.log("error  mail o contraseña")
          }
      
      
      
          } )

    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setEmail( data.get('email'))
    setPass(data.get('password'))
   

  
  };

  useEffect(()=>{
    if(email!==undefined){
      getUser(pass)
     
    }
   
  },[email])



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}