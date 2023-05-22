import { Router } from "express";

const router = Router();

import { usuario1Enviar,  usuario1Mostrar } from "../controllers/usuario1.js";
import { usuario2Enviar, usuario2Mostrar } from "../controllers/usuario2.js";

//Enviar correo
router.post("/enviar/usuario/1", usuario1Enviar);
router.post("/enviar/usuario/2", usuario2Enviar);

//Mostrar correos
router.get("/mostrar/usuario/1", usuario1Mostrar);
router.get("/mostrar/usuario/2", usuario2Mostrar);

export default router;