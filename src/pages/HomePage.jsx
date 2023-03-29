import React from "react";
import { JobList, SideMenu } from "../components";

export default function HomePage() {
  return (
    <div className="grid sm:grid-cols-5">
      <SideMenu />
      <div className="col-span-4">
        <JobList />
      </div>
    </div>
  );
}
