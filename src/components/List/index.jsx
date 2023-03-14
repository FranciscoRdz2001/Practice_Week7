import { DeleteButton, ModifyButton } from "..";
import { useEffect } from 'react'

const List = (props) => {

    const removeSubject = (id) => {
        const newValues = props.subjectsList.filter(item => item.id != id)
        props.updateSubjects(newValues);
    }

    return (
        <div className="List__Container">
            <div className="Titles__Container">
                <div>Clave</div>
                <div>Materia</div>
                <div>Calificación</div>
                <div />
                <div />
            </div>
            {
                props.subjectsList.map((item, idx) => {
                    return (
                        <div key={idx} className={`Subjects__Container ${idx % 2 == 0 && 'GrayBackground'}`}>
                            <div>{item.id}</div>
                            <div>{item.subject}</div>
                            <div>{item.qualification}</div>
                            <div><DeleteButton delete={() => { removeSubject(item.id) }} /></div>
                            <div><ModifyButton /></div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default List;