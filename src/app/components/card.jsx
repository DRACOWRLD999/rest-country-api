import React from 'react'

export default function Card(props) {
    return (
        <main className="flex flex-col items-center m-4">
            <div className="flex flex-col w-80 h-96 bg-white shadow-lg rounded-lg pb-0">
                <img src={props.image} alt="image" className="w-auto h-52 rounded-t-lg mb-4" />
                <h1 className="text-lg font-bold text-black ml-4 mb-3">{props.country}</h1>
                <div className="flex flex-col items-start">
                    <p className='text-black ml-4 font-medium'>population:
                        <span className='text-black ml-4 font-light'>{props.population}</span>
                    </p>

                    <p className='text-black ml-4 font-medium'>region:
                        <span className='text-black ml-4 font-light'>{props.region}</span>
                    </p>

                    <p className='text-black ml-4 font-medium'>capital:
                        <span className='text-black ml-4 font-light'>{props.capital}</span>
                    </p>
                </div>
            </div>
        </main>
    )
}
