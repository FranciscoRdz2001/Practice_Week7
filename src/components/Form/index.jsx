import { useEffect, useState } from "react";

const Form = (props) => {


    const { id, subject, qualification } = props.values

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setValues({ ...props.values, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        props.values.updateIndex
            ? props.setSubjectsList(current => current.map((item,idx) => {
                if(idx === props.values.updateIndex.idx){
                    item= props.values
                }
                return item

            }))
            : props.setSubjectsList(current => [...current, props.values])

    }

    return (
        <form onSubmit={handleSubmit} className="Form__Container" action="">
            <label htmlFor="">
                Clave
                <input
                    placeholder="Ejm. AEB-1011"
                    type="text"
                    name="id"
                    value={id}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Materia
                <input
                    placeholder="Ejm. Desarrollo de ..."
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Calificación
                <input
                    placeholder="Ejm. 75"
                    type="number"
                    name="qualification"
                    value={qualification}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;