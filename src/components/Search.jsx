import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <form
        onSubmit={submitHandler}
        className="relative"
      >
        <FaSearch onClick={submitHandler} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-96 p-2 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-50"
        />
      </form>
    </div>
  );
};

export default Search;
