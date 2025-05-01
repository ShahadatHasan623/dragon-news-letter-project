import React from "react";
import { FaBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ newsCard }) => {
  const { title, image_url,author,details,rating,total_view,id } = newsCard;
  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-xl overflow-hidden ">
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            
            src={author.img}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 flex items-center gap-2">
        <FaBookmark size={20} /><FaShareAlt size={20} />
        </button>
      </div>

      <div className="px-4">
        <h2 className="text-lg font-bold leading-tight">
         {title}
        </h2>
        <img
          className="w-full h-52 object-cover my-3 rounded-md"
          src={image_url}
          alt="News"
        />
        <p className="text-sm text-gray-600 mb-2">
          {details.length > 200 ?(
            <>
            {
                details.slice(0,200)
            }...
            <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer  hover:underline">
            Read More
            </Link>
            </>
          ):(
            details
          )}
        </p>
      </div>

      <div className="flex items-center justify-between p-4  mt-4">
        <div className="flex items-center space-x-1 text-orange-500">
          {Array.from({length:rating.number}).map((_,i)=>(
          <FaStar key={i} size={20}></FaStar>
          ))}
          <span className="text-gray-700 text-sm ml-2">{rating.number}</span>
        </div>
        <p className="text-sm text-gray-600">👁️ {total_view }</p>
      </div>
    </div>
  );
};

export default NewsCard;
