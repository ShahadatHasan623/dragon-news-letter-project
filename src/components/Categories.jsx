import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesData =fetch("/categories.json")
.then(res=>res.json())

const Categories = () => {
    const Categories=use(categoriesData)
    // console.log(Categories)
    return (
        <div>
            <h1 className='font-bold'>All Category</h1>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                    Categories.map(categoriesData=><NavLink className={"btn bg-base-100 border-none  hover:bg-base-200 "} key={categoriesData.id} to={`/category/${categoriesData.id}`}>{categoriesData.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;