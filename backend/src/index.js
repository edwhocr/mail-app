import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/mail.routes.js";

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(morgan("dev"));
app.use(bodyParser.json())

app.use('/api', routes);

const puerto = 4000;
app.listen(puerto);

console.log("Servidor iniciado correctamente en el puerto: "+puerto);