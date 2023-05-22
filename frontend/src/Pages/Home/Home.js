import logoUCE from "../../img/logo3.png"
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div>
            <center>
            <br></br>
            <img src={logoUCE} style={{width:"20%"}}/>
            <h1 className="titulo">Inicio</h1>
            <br></br>
            <h2>Ingeniería en Sistemas de Información</h2>
            <h3>Nuevas Tecnologías e Innovación en Sistemas de Información</h3>
            <h4>Ejemplo de correo electronico</h4>
            <br></br>
            <Link className="btn btn-danger" to="/usuario/1">Comenzar</Link>
           </center>
        </div>
    )
}