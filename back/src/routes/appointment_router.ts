import { Router } from 'express';

import { getAppointmentById } from '../controllers/Appointments/getAppointmentById';

import { scheduleAppointment } from '../controllers/Appointments/scheduleAppointment';

import { cancelAppointment } from '../controllers/Appointments/cancelAppointment';

import { getAppointmentByIdUser } from '../controllers/Appointments/getAppointmentByIdUser';

import {getAllAppointments} from "../controllers/Appointments/getAllAppointments";

const appointmentRouter = Router();

appointmentRouter.get('/appointments', getAllAppointments);

appointmentRouter.get('/appointment/:id', getAppointmentById);

appointmentRouter.post('/appointments/schedule', scheduleAppointment);

appointmentRouter.put('/appointments/cancel/:id', cancelAppointment);

appointmentRouter.get('/appointments/user/:id', getAppointmentByIdUser);

export default appointmentRouter;
