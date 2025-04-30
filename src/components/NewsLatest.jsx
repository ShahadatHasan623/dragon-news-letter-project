import React from "react";
import Marquee from "react-fast-marquee";

const NewsLatest = () => {
  return (
    <div>
      <div className="flex items-center gap-2 bg-base-200 p-3">
        <p className="bg-secondary py-2 px-4 text-base-100 font-semibold">
          Latest
        </p>
        <Marquee className="flex gap-5 items-center" pauseOnHover={true} speed={60}>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as || Bangladesh 
          </p>
          
        </Marquee>
      </div>
    </div>
  );
};

export default NewsLatest;
