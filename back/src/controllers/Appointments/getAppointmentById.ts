import { Request, Response } from 'express';
import { getAppointmentByIdS } from '../../services/Appointment/getAppointmentById';

export const getAppointmentById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const appointment = await getAppointmentByIdS(Number(id));

    if (appointment) {
        res.status(200).json(appointment);
    } else {
        res.status(404).json({ message: 'Turno no encontrado' });
    }

};