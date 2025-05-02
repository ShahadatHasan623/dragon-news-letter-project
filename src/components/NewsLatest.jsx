import React, { use } from "react";
import Marquee from "react-fast-marquee";

const newsLatest=fetch("/news.json")
.then(res=>res.json())

const NewsLatest = () => {
  const data =use(newsLatest)
  
  return (
    <div>
      <div className="flex items-center gap-2 bg-base-200 p-3">
        <p className="bg-secondary py-2 px-4 text-base-100 font-semibold">
          Latest
        </p>
        <Marquee className="flex gap-5 items-center" pauseOnHover={true} speed={60}>
         {
          data.map(signleNews=><p className="flex items-center gap-3 font-bold">{signleNews.title}</p>)
         }
        </Marquee>
      </div>
    </div>
  );
};

export default NewsLatest;
