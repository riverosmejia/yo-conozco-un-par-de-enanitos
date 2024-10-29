import Swal from 'sweetalert2'; // Importa SweetAlert2
import './turnos.css';
import toastr from 'toastr';

const Turno = ({ id, date, time, status, Asunto, onCancel }) => {
  
  const handleCancel = async () => {
    const { value: confirmed } = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas cancelar este turno?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar!',
      cancelButtonText: 'No, mantener!'
    });

    if (confirmed) {
      onCancel(id); // Llama a la función de cancelación con el ID
    }
    else {
      
      toastr.success("que hijueputa cobarde");

    }

    }
  

  return (
    <div className={`card ${status === 'cancelled' ? 'cancelled' : ''}`}>
      <div>
        <h3>Turno #{id}</h3>
        <p>Fecha: {date}</p>
      </div>
      <div>
        <p>Hora: {time}</p>
        <p>Estado: {status}</p>
        <p>Asunto: {Asunto}</p>
      </div>
      {status !== 'cancelled' && <button onClick={handleCancel}>Cancelar</button>}
    </div>
  );
};

export default Turno;
