import React from "react";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstContetnt from "./FirstContetnt";
import Backrop from "./Backrop";
import Dummy from "./Dummy";

export default function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstContetnt />} />
          <Route path="/content" element={<Content />} />
          <Route path="/dummy" element={<Dummy/>} />
          <Route path="/backrop" element={<Backrop />} />
        </Routes>

      </Router>
    </>
  );
};
