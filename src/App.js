import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Backrop from "./Components/Backrop";
import Content from "./Pages/Posts/Post";
import Dummy from "./Components/Helper/Dummy";
import Home from "./Pages/Home/Home";
import Header from "./Header/Header";
import Profile from "./Pages/Profile/Profile";
import VerticalNav from "./Header/VerticalNav";
import AllPost from "./Pages/Profile/AllPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <VerticalNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/content" element={<Content />} />
            <Route path="/dummy" element={<Dummy />} />
            {/* <Route path="/backrop" element={<Backrop />} /> */}
            {/* <Route path="/allpost" element={<AllPost/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
