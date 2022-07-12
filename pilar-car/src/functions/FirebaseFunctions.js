import { query,where,collection,getDocs, deleteDoc,doc } from "firebase/firestore";
import { db} from "../firebase/config" 



export const bringFavorites=async(user,setWishlist)=>{

    const q=query(collection(db,"favorites"),where("usuario","==",user))
   await getDocs(q).then((snapshot)=>{
         if(snapshot.size===0){
            console.log("Error")
            setWishlist([])
         }else{
             let items=(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
             console.log(items)
            setWishlist([...items])         
         }
      

    })

}

export const getFavoriteId= (wishlist,user,item)=>{

    let favoriteId
    wishlist.forEach(x => {
        if ((x.nombreItem===item.nombre)&&(x.usuario===user.Email)){
            favoriteId=x.id }
        
    });

    return favoriteId



}



export const deleteFavorite=async(wishlist,user,item)=>{
 
    let id=getFavoriteId(wishlist,user,item);
    await deleteDoc(doc(db,"favorites",id))



}