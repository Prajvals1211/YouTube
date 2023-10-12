import React from "react";

export const Shimmer = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, i) => {
          <div key={i} className="w-52 h-72 m-5 bg-gray-500"></div>;
        })}
    </div>
  );
};


export const SuggestShimmer = ()=>{
    return(
        <div>
            {Array(10).fill('').map((e,i)=>{
                <div className="w-32 h-14 m-2 bg-black" key={i}></div>
            })}
        </div>
    )
}


