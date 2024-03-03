import React from 'react'

export default function Search(props) {
    return (
        <main className=" m-4 bg-zinc-50 h-12 ">
            <div className='flex flex-row justify-start '>
                <img src='search.svg' className='w-6 h-6 mt-3 ml-5 absolute'></img>
                <input type="text" placeholder="Search for a country..." className=" pl-14 w-96 h-12 border bg-white shadow-lg rounded-md pr-4 text-black" />
            </div>
        </main>
    )
}
