import React,{useContext,useState} from "react";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cart(){
   

    const {precioTotal,cart,setCart,setTotal,setPrecioTotal,total}=useContext(CartContext)
    const navigate=useNavigate();
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    


      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
 
      const handleVaciarCarrito=()=>{

        localStorage.clear()
        setCart([])
        setTotal(0)
        setPrecioTotal(0)
       
        navigate("/")
        console.log("vaciar carrito")
      }


      const handleEliminar=(index)=>{
        let t=precioTotal-cart[index].subtotal
        localStorage.setItem("totalDeItems",total-cart[index].cantidad)
        localStorage.setItem("precioTotal",t)
        setPrecioTotal(t)
        setTotal(total-cart[index].cantidad) 
        
        let aux=cart;
        aux.splice(index,1);
        setCart([...aux])
        localStorage.setItem("cart",JSON.stringify(cart))


      }

    return(<>
    <h1>Cart component</h1>

        {cart.length<1? 
        <>
        <h2>El carrito esta vacio</h2>
         <Button variant="text" onClick={()=>navigate("/")} >Return to landing</Button>  
        
        </>:

            <>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">cantidad</StyledTableCell>
            <StyledTableCell align="right">precio</StyledTableCell>
            <StyledTableCell align="right">subtotal</StyledTableCell>
            <StyledTableCell align="right">eliminar </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row,index) => (
            <StyledTableRow key={cart.nombre}>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cantidad}</StyledTableCell>
              <StyledTableCell align="right">{row.precio}</StyledTableCell>
              <StyledTableCell align="right">{row.subtotal}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" color="error" onClick={()=>handleEliminar(index)}><DeleteIcon/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3>TOTAL:{precioTotal} </h3>
    <Button variant="contained" onClick={()=>navigate("/datosEnvio")}>
      Proseguir Compra
    </Button>
    <Button varaint="contained" color="error" onClick={()=>handleVaciarCarrito()}> Vaciar Carrito</Button>
   </>
  }


    </>)
}