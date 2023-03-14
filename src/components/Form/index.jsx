const Form =(props)=>{
    const handleSubmit =()=>{
        console.log('Listo');
    }

    return(
        <form onSubmit={handleSubmit} className="Form__Container" action="">
            <label htmlFor="">
                Clave
            <input placeholder="Ejm. AEB-1011" type="text" />
            </label>
            <label htmlFor="">
                Materia
            <input placeholder="Ejm. Desarrollo de ..." type="text" />
            </label>
            <label htmlFor="">
                Calificación
            <input placeholder="Ejm. 75" type="text" />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default Form;