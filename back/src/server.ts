import  Express, { Application }  from "express";
import morgan  from "morgan";
import cors  from "cors";

import UserRoutes from "./routes/user_routes";

import AppointmentRoutes from "./routes/appointment_router";

const server:Application = Express();


server.use(Express.json());
server.use(morgan("dev"));
server.use(cors());


server.use(UserRoutes);

server.use(AppointmentRoutes);

export default server;