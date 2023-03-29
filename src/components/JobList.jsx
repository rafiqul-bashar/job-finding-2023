import React from "react";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../redux/features/apiSlice";
import Header from "./Header";
import JobListItem from "./JobListItem";

export default function JobList() {
  const { sortBy, specific, search } = useSelector((state) => state.filters);
  const { data: jobs, isLoading, isError } = useGetJobsQuery(search);

  // filter
  const filterByType = (job) => {
    if (job.type === specific) {
      return true;
    }
    if (specific == "All") {
      return true;
    }
    return false;
  };

  let content = null;
  if (isLoading)
    content = (
      <p className="py-24 animate-pulse text-center text-3xl font-bold text-white">
        Loading...
      </p>
    );

  if (!isLoading && isError)
    content = (
      <p className="py-24  text-center text-3xl font-bold text-red-400">
        There was an error occurred
      </p>
    );

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs
      ?.filter(filterByType)
      .map((job) => <JobListItem key={job.id} job={job} />);
    if (sortBy === "highToLow") {
      content = jobs
        ?.filter(filterByType)
        .sort(function (a, b) {
          return b.salary - a.salary;
        })
        .map((job) => <JobListItem key={job.id} job={job} />);
    } else if (sortBy === "lowToHigh") {
      content = jobs
        ?.filter(filterByType)
        .sort(function (a, b) {
          return a.salary - b.salary;
        })
        .map((job) => <JobListItem key={job.id} job={job} />);
    }
  }

  if (!isLoading && !isError && jobs?.length === 0) {
    content = (
      <p className="py-24  text-center text-3xl font-bold text-white">
        No Jobs Found!
      </p>
    );
  }

  return (
    <div className="bg-gray-700/60 max-w-3xl mx-auto rounded-md p-4">
      <Header />
      {content}
    </div>
  );
}
