import React from 'react'
import {Link} from 'react-router-dom'

function NavigationMenu(props){
    return (
        <div>
            <div>
                <span className="text-xl">
                    CATEGORY
                </span>
            </div>
            <ul className="text-sl">
                <li>
                    <Link 
                    to='/' 
                    className="text-blue-500 py-2 border-b block"
                    onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                    to='/cafe' 
                    className="text-blue-500 py-2 border-b block"
                    onClick={props.closeMenu}
                    >
                        Cafe
                    </Link>
                </li>
                <li>
                    <Link 
                    to='/restaurant' 
                    className="text-blue-500 py-2 border-b block"
                    onClick={props.closeMenu}
                    >
                        Restaurant
                    </Link>
                </li>
                <li>
                    <Link 
                    to='/activity' 
                    className="text-blue-500 py-2 border-b block"
                    onClick={props.closeMenu}
                    >
                        Activity
                    </Link>
                </li>
                <li>
                    <Link 
                    to='/admin' 
                    className="text-blue-500 py-2 border-b block"
                    onClick={props.closeMenu}
                    >
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu