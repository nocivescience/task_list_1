import { useState } from "react"

export const Formulario=function(props){
    const [title,setTitle]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        props.createTask(title)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="entrada">Ingrese su nombre</label>
            <input type='text' id="entrada" onChange={(e)=>{setTitle(e.target.value)}}/>
            <button className="btn btn-primary">Pinchar Acá</button>
        </form>
    )
}