import React from 'react';
import { NavLink } from 'react-router';
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
                <button className='btn btn-primary'>Login</button>
            </div>
          
        </div>
    );
};

export default NavBar;