import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProfileInfo from './Cards/ProfileInfo'
function Navbar() {
  return (
    <div className='bg-white'>
    <h2 className='text-xl font-medium text-black py-2'>
        <span className='text-slate-500 text-3xl'>One</span>
        <span className='tect-slate-900 text-3xl'>Note</span>
    </h2>
    <SearchBar/>

    <ProfileInfo/>
    </div>
  )
}

export default Navbar