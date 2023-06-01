import ItemList from "./ItemList";
import zero from "../assets/LoadingZero.gif"
import loadingBar from  "../assets/loadingBar.gif" 
import '../App.css';
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { query,where,getFiresore,collection,getDocs,getDoc } from "firebase/firestore";
import { db} from "../firebase/config" 



export default function ItemListContainer(){

    const params=useParams();
    const categoryId=params.categoryId;
    const [loaded,setLoaded]=useState(false);
    const [items,setItems]=useState([]);





    /** const pedirDatos=()=>{
   fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts`)
   .then((resp)=>resp.json())
   .then((data)=>{  setItems(data);  setLoaded(true)} )
   .catch((error)=>{console.log("error")})
   
     }


    const pedirDatosCategoria=()=>{
        fetch(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts?categoria=${categoryId}`)
        .then((resp)=>resp.json())
        .then((data)=>{ setItems(data);    setLoaded(true)} )
        
          }
   
   
   
   
      useEffect(() => {
      if(categoryId===undefined){
            console.log("fdfdfdfdf")
            pedirDatos();
        
         
      }else{
          pedirDatosCategoria();
       
      }
    
      
     
   
   
   
     },[categoryId]);*/
   


     useEffect(()=>{
    
      if(categoryId===undefined){
        const productosRef=collection(db,"productos")
    
          getDocs(productosRef).then((res)=>{const products=res.docs.map((data)=>{
              return{
                  id:data.id,
                 ...data.data()
              }
          })
              console.log(products)
              setItems(products)
              setLoaded(true)
      })

    }else{
        const q=query(collection(db,"productos"),where("categoria","==",categoryId))
       getDocs(q).then((snapshot)=>{
            if(snapshot.size===0){
                console.log("no results")
            }else{
                setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
                console.log(items)
            }
            setLoaded(true);

       })
    }

  },[categoryId])


  
    return(<>

<h2 className="titulo" >ofertas de las semana</h2>
   <div style={{marginTop:"10px", justifyContent:"center"}}>
            
   {!loaded?<div> <section> <img className='img' alt={"Zero Loading"}  src={zero} />  
                  <img className='img2' alt={"Loading"} src={loadingBar} /></section> </div>:
             <ItemList items={items} />   }
        
   </div>





    </>);
}