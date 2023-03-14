import { DeleteButton, ModifyButton } from "..";

const List = (props) => {

    const removeSubject = (id) => {
        const newValues = props.subjectsList.filter(item => item.id != id)
        props.updateSubjects(newValues);
    }

    const update=(id, idx)=>{
        const values = props.subjectsList.filter(item => item.id === id)
        props.setValues({
            id: values[0].id,
            subject:values[0].subject,
            qualification:values[0].qualification, 
          });
        props.setUpdateIdx({
            idx:idx
        })
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
                            <div><ModifyButton update={()=>{ update(item.id, idx)}}/></div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default List;