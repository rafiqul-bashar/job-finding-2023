import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import AddNewJob from "./pages/AddNewJob";
import EditJob from "./pages/EditJob";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-new-job" element={<AddNewJob />} />
        <Route path="/edit-job" element={<EditJob />} />
      </Routes>
    </>
  );
}

export default App;
