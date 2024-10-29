import moment from 'moment';

interface I_Appoinment {

    date: Date;
    time: moment.Moment; // Mantén esto como Moment
    userId: number;
    status: boolean;// true-->activo, false-->inactivo
    Asunto:string; 
}

export default I_Appoinment;