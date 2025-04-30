import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <section className='nav-left'>

                </section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='nav-right'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;