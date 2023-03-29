import React from "react";
import { IoMdBriefcase } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { selectJob } from "../redux/features/filters/filterSlice";
const jobs = [
  { title: "Full Time", color: "#FF8A00" },
  { title: "Internship", color: "#FF5757" },
  { title: "Remote", color: "#56E5C4" },
];

export default function SideMenu() {
  const dispatch = useDispatch();
  const { specific } = useSelector((state) => state.filters);
  const [showJob, setShowJob] = React.useState(specific);
  React.useEffect(() => {
    dispatch(selectJob(showJob));
  }, [dispatch, showJob]);

  return (
    <div className="text-white p-3 ml-auto space-y-4 ">
      <Link to="/">
        <button
          onClick={() => setShowJob("All")}
          className="font-semibold text-blue-500 hover:text-white transition-all duration-150"
        >
          <span className="inline-block px-2">
            <IoMdBriefcase />
          </span>
          All Available Jobs
        </button>
      </Link>

      <div className="flex flex-col gap-3 ml-2 ">
        {jobs.map((el, i) => (
          <Link key={i} to="/">
            <button
              onClick={() => setShowJob(el.title)}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-150 font-semibold tracking-wide"
            >
              <div className={`w-6 h-6 bg-[${el.color}]`}></div>
              <h4>{el.title}</h4>
            </button>
          </Link>
        ))}
      </div>
      <Link to="/add-new-job">
        <div className="flex items-center p-2 space-x-2 mt-1 text-white/80 hover:text-white">
          <AiOutlinePlus />
          <span className="font-semibold tracking-tighter inline-block">
            Post A New Job
          </span>
        </div>
      </Link>
    </div>
  );
}
