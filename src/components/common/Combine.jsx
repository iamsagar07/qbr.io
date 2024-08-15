import React from 'react'
import Navbar from '../common/Navbar'
import Sidebar from '../common/Sidebar'


const Combine = () => {
    return (
        <div className='flex '>
            <Sidebar />
            <Navbar />
        </div>
    )
}

export default Combine