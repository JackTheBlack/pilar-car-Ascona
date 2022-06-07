import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){


    const params=useParams();
    const id=params.id;

    return(
    <>
    <ItemDetail id={id}/>
    </>
    );
}