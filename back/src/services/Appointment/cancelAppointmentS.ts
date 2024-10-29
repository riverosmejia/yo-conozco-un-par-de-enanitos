import { Appointment,AppointmentStatus} from '../../entities/Appointment';
import appointmentRepository from '../../repositories/AppointmentRepository';

export const cancelAppointmentS = async (id: number): Promise<Appointment | null> => {

    const appointment:Appointment = await appointmentRepository.findOneBy({ id }) as Appointment;

    if (appointment) {
        appointment.status=AppointmentStatus.CANCELLED; // Cambia el estado a "cancelled"
        const result = await appointmentRepository.save(appointment) as Appointment|null;
        return result;
    }

    return null;
};