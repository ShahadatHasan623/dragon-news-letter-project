import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AsideRight from '../components/Homelayout/AsideRight';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data =useLoaderData()
    const {id}=useParams()
    
    const [news,setNews]=useState({})

    useEffect(()=>{
        const newsDetails =data.find(singleData=>singleData.id == id)
        setNews(newsDetails)
    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto gap-5'>
                <section className='col-span-9'>
                        <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <AsideRight></AsideRight>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;