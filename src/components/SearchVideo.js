import React from "react";

const SearchVideo = ({ info, flag }) => {
  const { snippet } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    // <div className="w-[500px]">
    //   <div className="flex items-center ml-72" >
    //   <img className="rounded-lg mx-auto" alt="thumbnail" src={thumbnails.medium.url} />
    //     <p className="font-bold py-2">{title}</p>
    //     <p className="font-mono">{channelTitle}</p>
    //   </div>
    // </div>
    <div
      className={`${
        flag === "X" ? "w-[350px] relative overflow-hidden" : "w-[500px]"
      }  shadow-md rounded-lg overflow-hidden`}
    >
      <div className="flex p-4">
        <img
          className={`rounded-lg ${
            flag === "X" ? "h-14 w-18" : "h-20 w-40"
          } mr-4`}
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div>
          <p className={`${flag === "X" ? "text-xs " : ""}font-bold`}>
            {title}
          </p>
          <p className={`text-gray-600 ${flag === "X" ? "text-xs " : ""}`}>{channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideo;
