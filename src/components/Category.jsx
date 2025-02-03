import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex justify-center text-gray-50 p-3 mb-10">
      <ul>
        <li className="flex space-x-4">
          <NavLink to={"/cuisine/Italian"}>
            <div className="navlink-icon-wrapper h-20 w-20 bg-gray-800 flex flex-col items-center justify-center rounded-full text-center">
              <FaPizzaSlice />
              <h4 className="text-sm">Italian</h4>
            </div>
          </NavLink>
          <NavLink to={"/cuisine/American"}>
            <div className="navlink-icon-wrapper h-20 w-20 bg-gray-800 flex flex-col items-center justify-center rounded-full text-center">
              <FaHamburger />
              <h4 className="text-sm">American</h4>
            </div>
          </NavLink>
          <NavLink to={"/cuisine/Thai"}>
            <div className="navlink-icon-wrapper h-20 w-20 bg-gray-800 flex flex-col items-center justify-center rounded-full text-center">
              <GiNoodles />
              <h4 className="text-sm">Thai</h4>
            </div>
          </NavLink>
          <NavLink to={"/cuisine/Japanese"}>
            <div className="navlink-icon-wrapper h-20 w-20 bg-gray-800 flex flex-col items-center justify-center rounded-full text-center">
              <GiChopsticks />
              <h4 className="text-sm">Japanese</h4>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Category;
