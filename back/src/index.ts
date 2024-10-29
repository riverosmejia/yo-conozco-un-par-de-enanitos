import server from "./server";
import { PORT } from './config/envs';
import { PreLoadData } from "./helpers/preloadData";
import { AppDataSource } from "./config/appDataSource";

AppDataSource.initialize()
    .then(() => {
        console.log("Conexión a la base de datos establecida con éxito.");
        
        return PreLoadData();
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error durante la inicialización:", error);
    });
