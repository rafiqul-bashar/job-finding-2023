import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { setJobToEdit } from "../redux/features/jobs/jobsSlice";
import { useNavigate } from "react-router-dom";
import { useDeleteJobMutation } from "../redux/features/apiSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

export default function JobListItem({ job = {} }) {
  const { title, type, salary, deadline, id } = job;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let color;
  if (type === "Full Time") color = "bg-[#FF8A00]";
  if (type === "Remote") color = "bg-[#56E5C4]";
  if (type === "Internship") color = "bg-[#FF5757]";

  const [deleteJob, { isLoading, isError, isSuccess }] = useDeleteJobMutation();

  const toasting = () => {
    if (isError) {
      toast.error("Something Went Wrong!!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (isSuccess) {
      toast.success("Job Deleted Successfully !", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleEdit = () => {
    dispatch(setJobToEdit({ title, type, salary, deadline, id }));
    navigate("/edit-job");
  };

  const handleDelete = () => {
    deleteJob(id);
  };

  return (
    <div className="py-2 px-4 text-white flex items-center justify-between">
      <div className="info">
        <h2 className="font-semibold py-2 sm:text-lg">{title}</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-6 h-6 ${color}`}></div>
            <h2>{type}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <h2>BDT</h2>
            <h2>{salary}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <h2>
              <AiTwotoneCalendar />
            </h2>
            <h2>Closing on</h2>
            <h2>{deadline}</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 text-white text-sm">
        <button onClick={handleEdit}>
          <div className="flex items-center space-x-2 bg-blue-500 px-3 py-1 rounded-sm">
            <BsPencilFill />
            <h2>Edit</h2>
          </div>
        </button>

        <button disabled={isLoading} onClick={handleDelete}>
          <div className="flex items-center space-x-2 bg-red-500 px-3 py-1 rounded-sm">
            <MdDelete />
            <h2>Delete</h2>
          </div>
        </button>
      </div>
      {toasting()}
      <ToastContainer />
    </div>
  );
}
