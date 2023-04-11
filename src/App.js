import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Backrop from "./Components/Backrop";
import Content from "./Pages/Posts/Post";
import Dummy from "./Components/Helper/Dummy";
import Home from "./Pages/Home/Home";
import Header from "./Header/Header";
import Profile from "./Pages/Profile/Profile";
import VerticalNav from "./Header/VerticalNav";
import AllPost from "./Pages/Profile/AllPost";
import LoginForm from "./Auth/LoginForm";
import Register from "./Auth/Register";
import { useAuth } from "./providers/auth";
import Education from "./Pages/Profile/Education";
import { ProfileProvider } from "./providers/profile";

const App = () => {

  const auth = useAuth()
  // console.log('auth :>> ', auth);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex w-full bg-[#EAF0FF] relative">
          <VerticalNav />
          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="login"
              element={
                auth.user._id ? (
                  <Navigate replace to="/profile" />
                ) : (
                  <LoginForm />
                )
              }
            />
            <Route
              path="register"
              element={
                auth.user._id ? (
                  <Navigate replace to="/profile" />
                ) : (
                  <Register />
                )
              }
            />
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/login" element={<LoginForm />} /> */}

            <Route
              path="profile"
              element={
                auth.user._id ? (
                  <Profile />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route path="/profile" element={<Profile />} />

            <Route path="/education" element={<Education />} />

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
