import {useState, useEffect} from 'react'
import Error from './Error';





function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


   

    const generarId = () =>{
        const ramdom = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return ramdom + fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log('hay al menos un campo vacio');
            setError(true)
            return;
        } 

        setError(false)

        //objeto de pacientes

        const objetoDePaciente={
            
            nombre, 
            propietario, 
            email, 
            fecha,
            sintomas
        }


        if(paciente.id){
            //editando el registro
            objetoDePaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoDePaciente : pacienteState )
            
            setPacientes(pacientesActualizados)
            setPaciente({}) 
            
        }else{
            //console.log('new register');
            
            objetoDePaciente.id = generarId()
            setPacientes([...pacientes, objetoDePaciente])
        }


        //console.log(objetoDePaciente);


        //reiniciar formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return(
        <div className="md:w-1/2 lg:w-2/5 ">

            <h1 className="font-black text-3xl text-center">Seguimiento de Pacientes</h1>
            
            <p className="text-lg mt-5 text-center">

                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">administralos</span>

            </p>


            <form onSubmit={handleSubmit} className= "bg-white shadow-md rounded-lg py-16 px-8 mt-11" action="">

                {error && <Error>Todos los campos son obligatorios</Error>}


                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="petsname">Nombre de tu Mascota</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id ='petsname' type="text" placeholder="Nombre de la mascota" value={nombre}
                    onChange= {(e)=> setNombre(e.target.value)}
                    
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="propietario">Nombre del propietario </label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id ='propietario' type="text" placeholder="Nombre del propietario"
                    value={propietario}
                    onChange= {(e)=> setPropietario(e.target.value)}/>
                </div>


                <div>
                    <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="email">Email </label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id ='email' type="email" placeholder="Ingresa tu email"
                    value={email}
                    onChange= {(e)=> setEmail(e.target.value)}/>
                </div>


                
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="alta">alta </label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id ='alta' type="date" 
                    value={fecha}
                    onChange= {(e)=> setFecha(e.target.value)}/>
                </div>


                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="sintomas">sintomas </label>
                    <textarea  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas" id="sintomas"
                    value={sintomas}
                    onChange= {(e)=> setSintomas(e.target.value)} />
                    
                 </div>


                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value={paciente.id ? 'Editar Paciente ' : 'Agregar Paciente'} />





            </form>

        </div>

    )



}


export default Formulario;