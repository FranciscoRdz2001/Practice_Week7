import { useEffect } from "react";

const DeleteButton = (props) =>{
    return(
        <button className="DeleteButton" onClick={props.delete}>Eliminar</button>
    )
}
export default DeleteButton;