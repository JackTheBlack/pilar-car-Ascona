


export const IsFavorite=(wishlist,item,user)=>{
    let favorite =false
  
    wishlist.forEach(x=>{
      
        if ((x.nombreItem===item.nombre)&&(x.usuario===user.Email)){
        favorite=true }
    })
    
return favorite;


}