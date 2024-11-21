import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between bgHeader">
      <div className="p-2 m-2 my-auto text-white font-bold">
        <Link to="/component-1">Header</Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-5 p-5">
          <li className="px-4 font-bold text-white hover:bg-violet-600 active:bg-violet-700 cursor-pointer">
            <Link to="/component-1">First Component</Link>
          </li>
          <li className="px-4 font-bold hover:bg-violet-600 active:bg-violet-700 text-white cursor-pointer">
            <Link to="/component-2">Second Component</Link>
          </li>
          <li className="px-4 font-bold hover:bg-violet-600 active:bg-violet-700 text-white cursor-pointer">
            <Link to="/component-3">Third Component</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
