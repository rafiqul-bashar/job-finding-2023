import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { SideMenu } from "../components";
import {
  useEditJobMutation,
  useGetJobsQuery,
} from "../redux/features/apiSlice";

export default function EditJob() {
  const { selectedJob } = useSelector((state) => state.jobs);
  const { title, type, deadline, id, salary } = selectedJob;
  const [editTitle, setEditTitle] = React.useState(title);
  const [editType, setEditType] = React.useState(type);
  const [editSalary, setEditSalary] = React.useState(salary);
  const [editDeadline, setEditDeadline] = React.useState(deadline);
  const [editJob, { isLoading, isError, isSuccess }] = useEditJobMutation();
  const { refetch } = useGetJobsQuery();

  const handleForm = (e) => {
    e.preventDefault();
    editJob({
      id,
      data: {
        editTitle,
        editType,
        editSalary,
        editDeadline,
      },
    });
    if (isSuccess) {
      refetch();
    }
  };
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
      toast.success("Job Details Updated.", {
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
  return (
    <section>
      <div className="grid sm:grid-cols-5 ">
        <SideMenu />
        <div className="col-span-4">
          {/* add job section */}
          <div className="bg-gray-700/60 max-w-3xl mx-auto rounded-md p-8">
            <h1 className="text-white text-3xl font-bold text-center pb-8">
              Edit Job
            </h1>
            <form onSubmit={handleForm} className="space-y-6 max-w-xl mx-auto ">
              <div className="flex flex-col space-y-3">
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="jobeditTitle"
                    className="font-semibold text-white tracking-tighter text-lg w-full "
                  >
                    Job editTitle
                  </label>
                  <select
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle}
                    className="focus:outline-none p-1 px-3 col-span-2 bg-gray-600/80 text-white"
                    required
                  >
                    <option
                      value=""
                      hidden
                      // defaultValue={selectedJob.editTitle}
                    >
                      Select Job
                    </option>
                    <option>Software Engineer</option>
                    <option>Software Developer</option>
                    <option>Full Stack Developer</option>
                    <option>MERN Stack Developer</option>
                    <option>DevOps Engineer</option>
                    <option>QA Engineer</option>
                    <option>Product Manager</option>
                    <option>Social Media Manager</option>
                    <option>Senior Executive</option>
                    <option>Junior Executive</option>
                    <option>Android App Developer</option>
                    <option>IOS App Developer</option>
                    <option>Frontend Developer</option>
                    <option>Frontend Engineer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3">
                <label
                  htmlFor="JobType"
                  className="font-semibold text-white tracking-tighter  text-lg"
                >
                  Job Type
                </label>
                <select
                  onChange={(e) => setEditType(e.target.value)}
                  value={editType}
                  required
                  className="focus:outline-none p-1 px-3 col-span-2 bg-gray-600/80 text-white "
                >
                  <option value="" hidden defaultValue>
                    Select Job Type
                  </option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="grid grid-cols-3">
                <label
                  htmlFor="JobSalary"
                  className="font-semibold text-white tracking-tighter  text-lg"
                >
                  Salary
                </label>
                <div className="flex  rounded-md shadow-sm  col-span-2">
                  <span className="bg-gray-800 p-1 px-3 text-white">BDT</span>
                  <input
                    onChange={(e) => setEditSalary(e.target.value)}
                    value={editSalary}
                    type="number"
                    name="JobSalary"
                    required
                    className="!rounded-l-none !border-0 px-3 focus:outline-none w-full bg-gray-600/80 text-white"
                    placeholder="20,00,000"
                  />
                </div>
              </div>

              <div className="grid  grid-cols-3">
                <label
                  htmlFor="JobDeadline"
                  className="font-semibold text-white tracking-tighter  text-lg"
                >
                  Deadline
                </label>
                <input
                  onChange={(e) => setEditDeadline(e.target.value)}
                  value={editDeadline}
                  type="date"
                  name="JobDeadline"
                  required
                  className="focus:outline-none px-3 p-1 col-span-2 bg-gray-600/80 text-white"
                />
              </div>

              <div className="text-right">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="cursor-pointer btn btn-primary w-fit bg-blue-600 text-white font-bold px-3 py-1 rounded-sm"
                >
                  Update{" "}
                </button>
              </div>
            </form>
            {toasting()}
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}
