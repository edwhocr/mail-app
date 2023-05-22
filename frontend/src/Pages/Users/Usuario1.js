import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

export const Usuario1 = () => {
  const [mensaje, setMensaje] = useState("");
  const [email, setEmail] = useState("");

  const [lista, setLista] = useState([]);

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    
    axios({ 
      method: 'POST',
      url: 'http://localhost:4000/api/enviar/usuario/2',
      headers: { "Content-Type": "application/json" },
      data: {
        email: email,
        mensaje: mensaje
      }}
      )
      navigate("/mail-app/usuario/2")
  }
  useEffect(() => {
  axios({
      url: "http://localhost:4000/api/mostrar/usuario/1",
    })
      .then((response) => {
        setLista(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setLista]);
  


    return ( 

        <div>
            <h1 className="titulo">Usuario 1</h1>
          
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          placeholder="Ingresa tu correo" />

        <Form.Text className="text-muted">
        ejemplo@uce.edu.ec
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control 
          value={mensaje} 
          onChange={(e) => setMensaje(e.target.value)} 
          type="text" 
          placeholder="Ingresa aquí el mensaje" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Enviar?" />
      </Form.Group>
      <Button variant="primary" type="submit">Enviar</Button> | <Link className="btn btn-danger" to="/">Inicio</Link>
    </Form>
    <br></br>

    <ListGroup as="ol" numbered>
    {lista.map((item) => ( 
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
      
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.email}</div>
          <br></br>
          {item.mensaje}
    
        </div>
        <Badge bg="primary" pill>
          !
        </Badge>
      </ListGroup.Item>
      ))}

    </ListGroup>

        </div>
    )
}
