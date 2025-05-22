import React from 'react'
import Image from 'next/image'

const integrantes = [
    { apellido: 'Beltran Gomez', nombre: 'Johana Abigail', carnet: '25-0347-2020' },
    { apellido: 'Deodanes Benito', nombre: 'Mario Douglas', carnet: '25-1721-2020' },
    { apellido: 'Gonzalez Funes', nombre: 'Xavier Ezequiel', carnet: '25-1199-2020' },
]

const Page = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen px-4'>

            <div className='mb-8'>
                <Image
                    src="https://www.utec.edu.sv/uploads/insumos/logo-utec-horizontal-color.jpg"
                    alt="Logo UTEC"
                    width={500}
                    height={300}
                />
            </div>

            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold'>Materia: <span className='font-normal'>Seguridad en redes y sistemas</span></h1>
                <h2 className='text-xl font-bold mt-2'>Grupo: <span className='font-normal'>16</span></h2>
            </div>

            <h3 className='text-xl font-bold mb-4'>Integrantes</h3>

            <div className='space-y-3 border border-gray-200 p-2'>
                {integrantes.map((int, index) => (
                    <div key={index} className='flex gap-6 text-xl font-sans'>
                        <span>{int.apellido}</span>
                        <span>{int.nombre}</span>
                        <span>{int.carnet}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Page
