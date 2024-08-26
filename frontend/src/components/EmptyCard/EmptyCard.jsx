import React from 'react'

function EmptyCard({imgSrc,message}) {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
        <img src={imgSrc} alt="NO Notes" className='w-60'/>
        <p className= 'w-1/2 text-lg font-medium text-slate-700 leading-7 mt-5 text-center'>{message}</p>
    </div>
  )
}

export default EmptyCard