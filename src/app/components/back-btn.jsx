import React from 'react'

export default function Back() {
    return (
        <main className='h-24 pl-20 pt-10'>
            <a href="/" className="flex flex-row justify-center items-center bg-white rounded-lg w-44 shadow-[0px_0px_10px_4px_#00000024] h-10 text-black" >
                <img src="arrow-back.svg" alt="back" className="w-5 h-5 mr-5" />
                Back
            </a>
        </main>
    )
}
