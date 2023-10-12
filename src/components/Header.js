import React, { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Loader, { LoginName } from "../utils/loadContext";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestionText, setSuggestionText] = useState([]);
  const [suggestion, setSuggestion] = useState(false);
  const [Loading, setLoading] = useContext(Loader);
  const [name] = useContext(LoginName);
  const navigate = useNavigate();
  const getData = function (e) {
    // console.log(e);
    //  navigate(`/search${e}`)
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const cache = useSelector((store) => store.search);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (cache[searchText]) {
        setSuggestionText(cache[searchText]);
      } else {
        getSuggetionData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggetionData = async () => {
    const suggestion = await fetch(YOUTUBE_SEARCH_API + searchText);
    const data = await suggestion.json();
    // console.log(data[1]);
    setSuggestionText(data[1]);

    dispatch(
      cacheResult({
        [searchText]: data[1],
      })
    );
  };
  return (
    <>
      <div className="grid grid-flow-col shadow-lg fixed top-0 left-0 w-full bg-white z-[100]">
        {Loading && (
          <div className="load-bar ">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        <div className="flex p-2 col-span-1 cursor-pointer ">
          <div className="p-1 ml-3">
            <RxHamburgerMenu
              style={{
                fontSize: "1.5rem",
                padding: "",
                margin: "",
              }}
              onClick={() => toggleMenuHandler()}
            />
          </div>
          <a href="/" className="py-1 ml-5 text-red-700 ">
            <ImYoutube2
              style={{
                fontSize: "3rem",
                padding: "",
                margin: "2px",
                height: "20px",
              }}
            />
          </a>
        </div>
        <div className="px-10 p-2 col-span-10 text-center ">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 w-1/2 p-1 px-3 m-1 rounded-l-full"
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setSuggestion(true)}
              onBlur={() =>
                setTimeout(() => {
                  setSuggestion(false);
                }, 200)
              }
            />
            <button className="p-1 bg-gray-100 border border-gray-400 rounded-r-full  pb-[9px] px-2 w-10">
              <IoIosSearch
                style={{
                  fontSize: "1.2rem",
                  paddingTop: "3px",
                }}
              />
              {/* search */}
            </button>
            {suggestion && suggestionText.length > 0 && (
              <div className="absolute bg-white  ml-64 w-[34rem] shadow-lg rounded-lg">
                <ul className="py-2 px-5">
                  {suggestionText.map((s) => (
                    <Link key={s} to={"/search/" + s}>
                      {" "}
                      <li
                        className="py-1 px-2 shadow-sm hover:bg-gray-100"
                        onClick={() => {
                          getData(s);
                        }}
                      >
                        {s}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div
          className="p-2 m-2 col-span-1 hover:text-red-500 hover:cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          {name === "" ? (
            <HiOutlineUserCircle 
              style={{
                fontSize: "1.8rem",
                marginRight: "8px",
                marginTop: "2px",
              }}
            />
          ) : (
            <BiSolidUserCircle
              style={{
                fontSize: "1.8rem",
                marginRight: "8px",
                marginTop: "2px",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
