
import Item from "./Item"


export default function ItemList({items}){





    return(<>
        <div style={{display:"flex", justifyContent:"center"}}>
                {items.map((i)=>(<div key={i.name} style={{ paddingLeft:"10%"}}>
                  <Item item={i}/>
                  </div> ))}
            </div>
    </>)
}