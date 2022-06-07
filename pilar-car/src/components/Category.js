import {useParams} from "react-router-dom";


export default  function Category(){

    const params=useParams();
    const categoryId=params.categoryId;

return(<>
    <p>{categoryId}</p>

    </>)

}