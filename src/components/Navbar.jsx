import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-[90rem] mx-auto py-4 w-full px-48 flex items-center justify-evenly ">
      {/* <img src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png" /> */}
      <Link to="/">
        <img src="/logo.png" alt="logo" className="w-16 h-16 object-cover" />
      </Link>
      <h2 className="text-3xl text-white font-bold tracking-tighter py-2">
        Job Finding App with React and Redux Toolkit
      </h2>
    </nav>
  );
}
