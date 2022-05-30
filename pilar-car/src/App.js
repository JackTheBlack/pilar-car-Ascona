
import './App.css';
import React,{useState,  useEffect} from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import zero from "./assets/LoadingZero.gif"
import loadingBar from  "./assets/loadingBar.gif"




const array=[
  {name:"item1",img:"https://t1.uc.ltmcdn.com/es/posts/6/8/8/como_cambiar_las_bujias_de_la_moto_26886_600_square.jpg", stock:6},
  {name:"item2",img:"https://static.motor.es/fotos-diccionario/2019/11/bujia-tipos-averias-mantenimiento_1573747483.jpg", stock:3},
  {name:"item3",img:"https://http2.mlstatic.com/D_NQ_NP_721828-MLA40451035918_012020-O.jpg",stock:0}]
function App() {

  const [loaded,setLoaded]=useState(false);
 const [items,setItems]=useState([]);
  const pedirDatos=()=>{
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("resolver promesa")
    },2000)

})

  }




  useEffect(() => {
   
  pedirDatos().then((resp)=>{
     setItems(array);
    setLoaded(true);
  })



  },[]);


  return (
  
  <div className="App">
    <NavBar/>

   <h2 className="titulo" >ofertas de las semana</h2>
   <div style={{marginTop:"10px", justifyContent:"center"}}>
   
   {!loaded?<div> <section> <img className='img' alt={"Zero Loading"}  src={zero} />  
                  <img className='img2' alt={"Loading"} src={loadingBar} /></section> </div>:
   <ItemListContainer greetings={items}/>} 
   </div>



 </div> 
    
   
    
  
  );
}

export default App;
