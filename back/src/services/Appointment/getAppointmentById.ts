import appointmentRepository from '../../repositories/AppointmentRepository';
import I_AppointmentResponse from '../../DTO/I_AppointmentResponse';

export const getAppointmentByIdS = async (id: number): Promise<I_AppointmentResponse | null> => {

    const appointment = await appointmentRepository.findOne({
        where: { id },
        relations: ['user'], // Cargar la relación con el usuario
    });

    if (appointment) {
        return {
            id: appointment.id,
            date: appointment.date,
            time: appointment.time, // Almacena como string
            user: appointment.user, // ID del usuario relacionado
            status: appointment.status === 'active', // Convierte a booleano
            Asunto:appointment.Asunto
        };
    }

    return null; // Retorna null si no se encuentra la cita
};