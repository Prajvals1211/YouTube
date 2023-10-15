
import React, { useContext, useState } from "react";
import { ImYoutube2 } from "react-icons/im";
import { LoginName } from "../utils/loadContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [text, setText] = useState("");
  const [name, setName] = useContext(LoginName);
  const navTo = useSelector((store) => store.chat.LoginToPage);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
       <a href="/">
          <ImYoutube2 className="text-red-500 text-6xl mb-6" />
        </a>

        <form
          className="text-center"
          onSubmit={(e) => {
            e.preventDefault();
            setName(text);
            !navTo ? navigate("/") : navigate(`/watch?v=${navTo}`);
          }}
        >
          <div className="space-y-4">
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Name"
            />
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg mt-4 inline-block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
