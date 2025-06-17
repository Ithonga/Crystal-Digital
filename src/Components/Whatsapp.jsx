import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Whatsapp() {
    return (
        <Link to={"https://wa.me/254722855767"}>
            <div className='fixed bottom-5 left-5 w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center'>
                <FaWhatsapp className='text-white text-3xl' />
            </div>
        </Link>
    )
}

export default Whatsapp