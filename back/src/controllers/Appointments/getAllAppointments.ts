import { Request, Response } from 'express';
import { getAllAppointmentsS } from '../../services/Appointment/getAllAppointmentsS';

export const getAllAppointments = async (req: Request, res: Response) => {

    const appointments = await getAllAppointmentsS();
    res.status(200).json(appointments);

};