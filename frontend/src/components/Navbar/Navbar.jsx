import React from 'react'
import './Navbar.css'
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import { useAuthStore } from '../../Store/Store'
>>>>>>> 646c1f5 (first commit)

const Navbar = () => {

    const history = useNavigate();

<<<<<<< HEAD
    const logOut = () => {
        sessionStorage.clear("id");
=======
    const { logout } = useAuthStore();

    const logOut = async () => {
        await logout();
>>>>>>> 646c1f5 (first commit)
        history("/signin");
    }

    return (
        <div className='navContainer'>
            <div className="logo">Vectrofy</div>
            <div className="logOutBtn" onClick={logOut}><MdOutlineLogout /></div>
        </div>
    )
}

export default Navbar
