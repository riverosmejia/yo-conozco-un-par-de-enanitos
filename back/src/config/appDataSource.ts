import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import {USERNAME, PASSWORD, DATABASE,DB_PORT } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: DB_PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    //el de abajo es para quitar o poner los datos de SQL en la terminal.
    logging: false,
    //el de abajo es para quitar datos cada vez que se reinicie el programa
    dropSchema:true,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
});

// Función para obtener el repositorio de una entidad específica
export const getRepository = <Entity>(entity: new () => Entity) => {
    return AppDataSource.getRepository(entity);
};
