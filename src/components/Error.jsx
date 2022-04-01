
const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-center uppercase text-white font-bold p-2 rounded-md mb-3'>
    <p>{children}</p>
    </div>
  )
}

export default Error