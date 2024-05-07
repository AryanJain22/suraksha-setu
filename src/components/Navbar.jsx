import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Line, RiCloseFill } from "react-icons/ri";
import { auth } from '../firebase-config';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(true);
    const currentUser = useContext(AuthContext);

    return (
        <>
            <nav className="relative flex justify-between items-center w-full h-16 px-5 py-3 text-black z-10" style={{ backgroundImage: "radial-gradient(circle, #4D869C 0%, #EEF7FF 100%)" }}>
                <Link to="/" className='md:text-2xl text-xl font-semibold'>Suraksha Setu</Link>

                <button className="block md:hidden text-2xl" onClick={e => setOpenNav(!openNav)}>
                    {
                        !openNav ? <RiCloseFill className='icon' /> : <RiMenu2Line className='icon' />
                    }
                </button>

                <ul className={`w-full md:w-auto absolute top-16 left-0 ${openNav && 'left-[-100%]'} d-flex flex-col md:flex-row border-t border-blue-800 md:border-0 md:static py-5 gap-5 md:gap-6 lg:gap-8 md:py-0 transition-all duration-300 `}>
                    <li><Link style={{ fontSize: 'calc(16px + 2px)' }} to="/">Home</Link></li>
                    <li><Link style={{ fontSize: 'calc(16px + 2px)' }} to="/community">Community</Link></li>
                    <li><Link style={{ fontSize: 'calc(16px + 2px)' }} to="/create-feed">Create Feed</Link></li>
                    <li><Link style={{ fontSize: 'calc(16px + 2px)' }} to="/profile">Profile</Link></li>

                    <li>
                        <div className='d-flex gap-3 mt-2 md:hidden' >
                            <img className="w-10 h-10 rounded-full inline object-cover" src={currentUser?.photoURL} alt="Rounded avatar" />
                            <Link style={{ fontSize: 'calc(16px)' }} to="/">{currentUser?.displayName}</Link>
                            <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-md text-lg px-4 py-1.5" onClick={() => signOut(auth)}>Log out</button>
                        </div>
                    </li>
                </ul>



                <div className='justify-center items-center gap-5 mt-2 md:flex hidden' >
                    <img className="w-10 h-10 rounded-full inline object-cover" src={currentUser?.photoURL} alt="Rounded avatar" />
                    <Link to="/profile" className='md:text-lg' >{currentUser?.displayName}</Link>
                    <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-md text-sm px-4 py-1.5" onClick={() => signOut(auth)}>Log out</button>
                </div>

            </nav>
        </>
    )
}

export default Navbar;
