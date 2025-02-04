import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ count, height }) => {
  return (
      Array(count)
        .fill(0)
        .map((item,i) => (
            <div key={i} className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative">
              <Skeleton height={height || 200} />
            </div>
        ))
  )  
};

export default CardSkeleton;
