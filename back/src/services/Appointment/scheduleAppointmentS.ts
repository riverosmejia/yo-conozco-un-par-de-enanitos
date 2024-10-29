import moment from 'moment';
import I_Appoinment from '../../DTO/I_Appointment';
import { Appointment,AppointmentStatus} from '../../entities/Appointment';
import appointmentRepository from '../../repositories/AppointmentRepository';


export const scheduleAppointmentS = async (newAppointment: I_Appoinment): Promise<Appointment|string> => {

    // Verifica que el tiempo sea válido y formatea
    const formattedTime = moment(newAppointment.time, 'HH:mm', true); // true para modo estricto
    if (!formattedTime.isValid()) {
        return 'El formato de la hora no es válido. Debe ser HH:mm.';
    }

    const appointment = appointmentRepository.create({
        user: { id: newAppointment.userId }, // Relacionar el usuario
        date: newAppointment.date,
        time: formattedTime.format('HH:mm'), // Formatea el tiempo correctamente
        status: AppointmentStatus.ACTIVE,
        Asunto: newAppointment.Asunto
    });

    const result = await appointmentRepository.save(appointment) as Appointment;

    return result;
};