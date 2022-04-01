import OtrosP from "./OtrosP";




const Listadepacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

          {pacientes && pacientes.length ? (

              <>
              
              
                    <h2 className="font-bold text-center text-3xl">listado de pacientes</h2>

                  <p className='text-xl mt-5 mb-10 text-center'>administra tus <span className='text-indigo-600 font-bold'>pacientes y citas</span></p>

                 {pacientes.map( (paciente)=>{


                  return(
                    <OtrosP
                    
                      key={paciente.id}

                      paciente={paciente}

                      setPaciente={setPaciente}
                      
                      eliminarPaciente={eliminarPaciente}
                    
                    />
                  )

                  } ) }
              
              
              
              </>




          ):(<>
          
          
          <h2 className="font-bold text-center text-3xl">No hay pacientes</h2>

          <p className='text-xl mt-5 mb-10 text-center'>Añade tu(s) paciente(s) <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span></p>
          
          
          </>)}




         
         
            
      </div>

  )
}






export default Listadepacientes;