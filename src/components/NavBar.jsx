import React from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-4 items-center text-accent'>
                <NavLink className={({isActive})=>isActive?'border-b-3 border-amber-400':''} to='/'>Home</NavLink>
                <NavLink className={({isActive})=>isActive?'border-b-3 border-amber-400':''} to='/about'>About</NavLink>
                <NavLink className={({isActive})=>isActive?'border-b-3 border-amber-400':''} to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={userImg} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-5 py-2'>Login</Link>
            </div>
          
        </div>
    );
};

export default NavBar;