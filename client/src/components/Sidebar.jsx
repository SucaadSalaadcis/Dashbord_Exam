import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='w-[70px] h-[760px] bg-white shadow-md'>
            <Link to={"/"}><i class="fa-solid fa-lines-leaning pl-6 pt-10"></i></Link>
            <Link to={"/item"}> <i class="fa-solid fa-box pl-6 pt-10"></i></Link>
            <br />
            <Link to={"/order"}> <i class="fa-solid fa-boxes-stacked pl-6 pt-10"></i></Link>
            <Link to={"/general"}> <i class="fa-solid fa-box-archive pl-6 pt-10"></i></Link>
            <br />
            <Link to={"/login"}> <i class="fa-solid fa-arrow-right-from-bracket pl-6 pt-10"></i></Link>
        </div>
    )
}

export default Sidebar