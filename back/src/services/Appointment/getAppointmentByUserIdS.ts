import appointmentRepository from '../../repositories/AppointmentRepository';
import { Appointment} from '../../entities/Appointment';
export const getAppointmentsByUserIdS = async (userId: number): Promise<Appointment[]> => {

    const appointments = await appointmentRepository.find({
        where: {
            user: {
                id: userId, // Filtra por la relación con User
            },
        },
        relations: ['user'], // Carga la relación con el usuario
    });

    return appointments; // Devuelve los appointments encontrados
};