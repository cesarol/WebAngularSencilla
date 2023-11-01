import express from "express";
import cors from "cors";
import nombre from "./routes/color.ts";

const app = express();
const port = parseInt(process.env.PORT_API as string, 10) || 5000;
const hostname = '0.0.0.0'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Uso de las rutas
app.use('/nombre', nombre);

// Activación del servidor del API
app.listen(port,hostname, () => {
    console.log(`Servidor activo en el puerto ${hostname}:${port}`);
});