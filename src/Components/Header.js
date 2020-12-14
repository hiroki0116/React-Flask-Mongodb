import React from 'react'
import Navigation from './Navigation'
import{ Link } from "react-router-dom"
import logo from '../travel.png'


function Header(){
    return (
        <header className=' p-1  mx-8 flex justify-between items-center'>
                <Link to={'/'}>
                    <div>
                        
                        <img src = {logo} />
                        <p className="text-lg font-bold font-mono">SapporoVisor</p>

                    </div>
                </Link>
            <Navigation />
        </header>
    )
}

export default Header;