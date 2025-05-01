import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-300 p-3 mt-5'>
            <h1 className='font-bold'>Q-zone</h1>
            <div className='space-y-2'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;