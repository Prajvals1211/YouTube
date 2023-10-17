import React from "react";

export const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap flex-row">
        {Array(50)
          .fill("")
          .map((e, i) => {
            return (
              <div key={i}>
                <div
                  
                  className="w-[295px] p-2 m-2 h-44 bg-gray-200 rounded flex flex-wrap"
                ></div>
                <div>
                  <Shimmer1 />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const Shimmer1 = () => {
  return (
    <div className="flex flex-wrap flex-col">
      <div className="w-[295px]  p-2 m-2  bg-gray-200 h-8 rounded"></div>
      <div className="w-20  p-2 m-2  bg-gray-200 h-5 rounded"></div>
      <div className="flex justify-between">
        <div className="w-20  p-2 m-2  bg-gray-200 h-6 rounded"></div>
        <div className="w-20  p-2 m-2  bg-gray-200 h-6 rounded"></div>
      </div>
    </div>
  );
};

export const SuggestShimmer = () => {
  return (
    <div>
      {Array(25)
        .fill("")
        .map((e, i) => {
          return <div className="w-[350px] h-20 m-2 bg-gray-200" key={i}></div>; 
        })}
    </div>
  );
};
export const SearchPageShimmer = () => {
  return (
    <div>
      {Array(25)
        .fill("")
        .map((e, i) => {
          return <div className="w-[500px]  ml-[550px] h-20 m-2 bg-gray-200" key={i}></div>; //w-[350px]
        })}
    </div>
  );
};

export const WatchPageShimmer = () => {
  return (
    <div className="w-full h-full relative overflow-hidden z-0 outline-0 bg-gray-300"></div>
  );
};
