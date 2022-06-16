import React,{useContext} from "react";
import { styled } from '@mui/material/styles';

import CartContext from "../context/CartContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Cart(){


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
      
      const handleEliminar=(index)=>{

        let aux=cart;
        aux.splice(index,1);
        setCart([...aux])


      }

    const {cart,setCart}=useContext(CartContext)
    console.log(cart)
    return(<>
    <h1>Cart component</h1>
      

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">cantidad</StyledTableCell>
            <StyledTableCell align="right">precio</StyledTableCell>
            <StyledTableCell align="right">subtotal</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
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
              <StyledTableCell align="right"><button onClick={()=>handleEliminar(index)}>eliminar</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </>)
}