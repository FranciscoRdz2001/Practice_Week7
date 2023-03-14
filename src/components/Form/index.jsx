import { useEffect, useState } from "react";

const Form =(props)=>{
    const [values , setValues] = useState({
        id:"",
        subject:"",
        qualification:null
      })
    
      const {id, subject, qualification} = values
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };


    const handleSubmit =(e)=>{
        e.preventDefault();
        props.subjectsList(current=> [...current, values])
    }

    /*useEffect(()=>{
        console.log(values)
    },[values])*/

    return(
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
                type="text" 
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