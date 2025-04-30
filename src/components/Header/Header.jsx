import React from 'react';
import headerImg from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center my-12 gap-3'>
            <img src={headerImg} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),"EEEE, MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;