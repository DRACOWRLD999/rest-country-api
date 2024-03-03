import React from 'react'

export default function Filter() {
    return (
        <main className="flex flex-row justify-between p-5 bg-white rounded-lg  mr-12 h-14 w-64">
            <div className="flex flex-row justify-between">
                <select className="bg-white text-black w-56 border-0 outline-0 " >
                    <option value="Filter by Region" disabled selected hidden>Filter by Region</option>
                    <option value="Africa">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </main>
    )
}
