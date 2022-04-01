

const OtrosP = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () =>{
    const respuesta = confirm('deseas eliminar ese paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl mt-10'>
            <p className='font-bold mb-3 text-gray-700 uppercase '>nombre:{' '} <span className='font-normal normal-case'>{nombre}</span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase '>propietario:{' '} <span className='font-normal normal-case'>{propietario}</span></p>

         <p className='font-bold mb-3 text-gray-700 uppercase '>Email:{' '} <span className='font-normal normal-case'>{email}</span></p>

         <p className='font-bold mb-3 text-gray-700 uppercase '>Fecha de alta:{' '} <span className='font-normal normal-case'>{fecha}</span></p>

         <p className='font-bold mb-10 text-gray-700 uppercase '>síntomas:{' '} <span className='font-normal normal-case '>{sintomas}</span></p>

         <div className="flex justify-between">
           <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-bold uppercase" onClick={() => setPaciente(paciente)}> Editar </button>

           <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold uppercase "
           onClick={handleEliminar}
           
           
           
           >Eliminar </button>
         </div>
    </div>
  )
}

export default OtrosP;