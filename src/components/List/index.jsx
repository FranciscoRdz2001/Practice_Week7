import { DeleteButton, ModifyButton } from "..";

const List = () =>{
    return(
        <div className="List__Container">
            <div className="Titles__Container">
                <div>Clave</div>
                <div>Materia</div>
                <div>Calificación</div>
                <div/>
                <div/>
            </div>

            <div className="Subjects__Container">
                <div>AEB-1011</div>
                <div>Programación web</div>
                <div>90</div>
                <div><DeleteButton/></div>
                <div><ModifyButton/></div>
            </div>
        </div>
    )
}
export default List;