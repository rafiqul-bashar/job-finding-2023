import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { SideMenu } from "../components";
import { useAddJobMutation } from "../redux/features/apiSlice";

export default function AddNewJob() {
  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState("");
  const [salary, setSalary] = React.useState(6000);
  const [deadline, setDeadline] = React.useState("");
  const [addJob, { isLoading, isSuccess, isError }] = useAddJobMutation();
  const resetForm = () => {
    setTitle("");
    setType("");
    setSalary(6000);
    setDeadline("");
  };

  const handleForm = (e) => {
    e.preventDefault();
    addJob({
      title,
      type,
      deadline,
      salary,
    });
    resetForm();
  };

  const toasting = () => {
    isSuccess &&
      toast.success("Job Added Successfully !", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  };
  {
    isError &&
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
  return (
    <section>
      <div className="grid sm:grid-cols-5 ">
        <SideMenu />
        <div className="col-span-4">
          {/* add job section */}
          <div className="bg-gray-700/60 max-w-3xl mx-auto rounded-md p-8">
            <form onSubmit={handleForm} className="space-y-6 max-w-xl mx-auto ">
              <div className="flex flex-col space-y-3">
                <h1 className="text-white text-3xl font-bold text-center pb-8 ">
                  Post A New Job
                </h1>
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="jobtitle"
                    className="font-semibold text-white tracking-tighter text-lg w-full "
                  >
                    Job Title
                  </label>
                  <select
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="focus:outline-none p-1 px-3 col-span-2 bg-gray-600/80 text-white"
                    required
                  >
                    <option value="" hidden defaultValue>
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
                  onChange={(e) => setType(e.target.value)}
                  value={type}
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
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
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
                  onChange={(e) => setDeadline(e.target.value)}
                  value={deadline}
                  type="date"
                  name="JobDeadline"
                  required
                  className="focus:outline-none px-3 p-1 col-span-2 bg-gray-600/80 text-white"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="cursor-pointer btn btn-primary w-fit bg-emerald-600 text-white font-bold px-3 py-1 rounded-sm"
                >
                  Submit
                </button>
              </div>
            </form>
            {toasting()}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
