import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomDetails from "./components/RoomDetails/RoomDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:slug" element={<RoomDetails />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
