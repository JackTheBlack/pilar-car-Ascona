import {useParams} from "react-router-dom";


export default  function Category(){

    const params=useParams();
    const categoryId=params.categoryId;

return(<>
    <p>{categoryId}</p>

    </>)

}
/** 
const handleSubmit= async (event)=>{
       
    let cadenaEnfalta="los siguientes items estan en falta: "
    const db=getFirestore();
    const batch=writeBatch()
    const orderRef=collection(db,"order")
    const productRef=collection(db,"productos")
    const q=query(productRef,where(documentId,'in',...cart.ma((item)=>item.id)))
    const productos=await getDocs(q)
    const outOfStock=[]
    console.log("estoy a qui")
    console.writeBatch()

    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
   const order={comprador:{nombre:data.get('nombre'),ciudad:data.get('ciudad'),direccion:data.get('direccion')},orden:{...cart},Total:precioTotal}
   console.log(order)
    
        productos.docs.foreach((doc)=>{
            const itemUpdate=cart.find(prod=>prod.id===doc.id)

            if ((doc.data().cantidad-itemUpdate.cantidad)>=0){
                batch.update(doc.ref,{
                    stock:doc.data().stock-itemUpdate.cantidad
                })

            }else{
                outOfStock.add(itemUpdate)
            }
        })

        if(outOfStock.length===0){
            batch.commit()
            localStorage.removeItem('cart')
            setTotal(0)
            console.log("estoy aqui")
            setCart([])
            navigate("/")
           
        }else{
            if(outOfStock.length===1){
                alert("El siguiente item esta en falta ",outOfStock[0])
            }
            if(outOfStock.length>1){
                for(let x=0;x<outOfStock.length+1;x++ ){
                    cadenaEnfalta=cadenaEnfalta+` ${outOfStock[x]}`
                }
                alert(cadenaEnfalta)
            } 
        }

   
  /**  cart.forEach((item) => {
        const docRef=doc(db,"productos",item.id)
        getDoc(docRef).then((doc)=>{
            if((doc.data().stock-item.cantidad)>=0){
            updateDoc(docRef,{
                stock:doc.data().stock-item.cantidad
            })}else{
                alert("No hay estock del producto ",item.nombre)
            }
        })
    });
*/

   
 
   // const ordersCollection=collection(db,"orders")
   // addDoc(ordersCollection,order).then((doc)=>{setOrderId(doc.id)})
  


   
   

    
}*/