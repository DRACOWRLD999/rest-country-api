import React from 'react'

export default function Country(props) {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 ">
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div>
          <img src={props.country} alt="country name" />
          
        </div>
      </div>
    </main>
  )
}
