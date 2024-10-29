import { Request, Response } from 'express';
import { scheduleAppointmentS } from '../../services/Appointment/scheduleAppointmentS';
import I_Appoinment from '../../DTO/I_Appointment';

export const scheduleAppointment = async (req: Request, res: Response) => {
    
    const newAppointment: I_Appoinment = req.body; // Asegúrate de que el cuerpo tenga el formato correcto
    const createdAppointment = await scheduleAppointmentS(newAppointment);

    res.status(201).json(createdAppointment);

};