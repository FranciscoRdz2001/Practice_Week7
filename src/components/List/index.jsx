import { DeleteButton, ModifyButton } from "..";

const List = (props) =>{
    return(
        <div className="List__Container">
            <div className="Titles__Container">
                <div>Clave</div>
                <div>Materia</div>
                <div>Calificación</div>
                <div/>
                <div/>
            </div>
            {
                props.subjectsList.map((item,idx)=>{
                    return(
                        <div key={idx} className={`Subjects__Container ${idx % 2 == 0 && 'GrayBackground'}`}>
                            <div>{item.id}</div>
                            <div>{item.subject}</div>
                            <div>{item.qualification}</div>
                            <div><DeleteButton/></div>
                            <div><ModifyButton/></div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default List;