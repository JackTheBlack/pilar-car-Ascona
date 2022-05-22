
import './App.css';
import React,{useState, useContext} from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


const props="props";

const items=[
  {name:"item1",img:"https://t1.uc.ltmcdn.com/es/posts/6/8/8/como_cambiar_las_bujias_de_la_moto_26886_600_square.jpg", stock:6},
  {name:"item2",img:"https://static.motor.es/fotos-diccionario/2019/11/bujia-tipos-averias-mantenimiento_1573747483.jpg", stock:3},
  {name:"item3",img:"https://http2.mlstatic.com/D_NQ_NP_721828-MLA40451035918_012020-O.jpg",stock:0}]
function App() {


  return (
  
   
    <div className="App">
       <NavBar/>
   
      <h2 className="titulo" >ofertas de las semana</h2>
      <div style={{marginTop:"10px", justifyContent:"center"}}>
      
      <ItemListContainer greetings={props}/>
      </div>

    </div>
    

  );
}

export default App;
