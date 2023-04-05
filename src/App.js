import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Backrop from "./Components/Backrop";
import Content from "./Components/Content";
import Dummy from "./Components/Dummy";
import FirstContetnt from "./Components/FirstContetnt";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import VerticalNav from "./Components/VerticalNav";
import AllPost from "./Components/AllPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <VerticalNav />
          <Routes>
            <Route path="/" element={<FirstContetnt />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/content" element={<Content />} />
            <Route path="/dummy" element={<Dummy />} />
            {/* <Route path="/backrop" element={<Backrop />} /> */}
            <Route path="/allpost" element={<AllPost/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
