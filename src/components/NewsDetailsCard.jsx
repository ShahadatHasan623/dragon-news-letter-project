import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details } = news;
  return (
    <div>
        <h1 className="font-bold mb-5">Dragon News</h1>
      <div className="bg-base-100 p-5 space-y-5 shadow-sm">
        <img className="w-full" src={image_url} alt="" />
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-accent">{details}</p>
        <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>Back to Category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
