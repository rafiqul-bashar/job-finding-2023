import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  searchedFunc,
  sortByFilter,
} from "../redux/features/filters/filterSlice";
const sortOptions = [
  { type: "default", title: "Default" },
  { type: "lowToHigh", title: "Salary (Low to High)" },
  { type: "highToLow", title: "Salary (High to Low)" },
];
export default function Header() {
  const { search } = useSelector((state) => state.filters);
  const [searchTerm, setSearchTerm] = React.useState(search);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchedFunc(searchTerm));
  };
  const handleSortBy = (e) => {
    e.preventDefault();
    dispatch(sortByFilter(e.target.value));
  };
  return (
    <header>
      {" "}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-between text-white"
      >
        <h2 className="text-3xl font-bold "> All Available Jobs</h2>
        <div className="flex items-center space-x-2 cursor-pointer">
          <BsSearch type="submit" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="search..."
            className="bg-gray-700 py-1 px-3 focus:outline-none"
          />
          <select className="bg-gray-700 py-2 px-3 " onChange={handleSortBy}>
            {sortOptions.map((el, i) => (
              <option key={i} value={el.type}>
                {el.title}
              </option>
            ))}
          </select>
        </div>
      </form>
    </header>
  );
}
