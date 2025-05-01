import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import bgImage from '../../assets/bg.png'
const AsideRight = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <img className='mt-5 w-full' src={bgImage} alt="" />
        </div>
    );
};

export default AsideRight;