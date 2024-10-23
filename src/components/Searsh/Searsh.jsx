import React from "react";
import "./Searsh.css";
import { AiOutlineSearch } from "react-icons/ai";
const Searsh = () => {
  return (
    <div className="searsh">
      <div className="secContainer container">
        <h3 className="title">Vehicle CRUD</h3>
        <div className="searshDiv grid">
          <input type="text" className="Type" placeholder="Type"/>
          <input type="number" className="Year" placeholder="Year"/>
          <input type="text" className="Model" placeholder="Model"/>
          <input type="number" className="Price" placeholder="Price"/>
          <button className="btn primaryBtn flex" >
            <AiOutlineSearch className="icon" />
            <span>Create</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searsh;
