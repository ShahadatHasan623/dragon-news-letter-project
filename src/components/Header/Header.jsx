import React from 'react';
import headerImg from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center my-12 gap-3'>
            <img src={headerImg} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;