import { Request, Response } from 'express';
import { getAppointmentsByUserIdS } from '../../services/Appointment/getAppointmentByUserIdS';

export const getAppointmentByIdUser = async (req: Request, res: Response) => {

    const {id} = req.params;
    const appointments = await getAppointmentsByUserIdS(Number(id));

    if(appointments){
        res.status(200).json(appointments);
    } else {
        res.status(404).json({message:'Turnos de Usuario no Encontrado'});
    }

};