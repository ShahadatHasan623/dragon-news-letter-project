import React, { Suspense } from "react";
import Categories from "../Categories";

const AsideLeft = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default AsideLeft;
