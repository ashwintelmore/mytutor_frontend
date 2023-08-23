import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Backrop from "./Components/Backrop";
import Dummy from "./Components/Helper/Dummy";
import Home from "./Pages/Home/Home";
import Header from "./Header/Header";
import Profile from "./Pages/Profile/Profile";
import ShowProfile from "./Pages/Profile/ShowProfile";
import VerticalNav from "./Header/VerticalNav";
import LoginForm from "./Auth/LoginForm";
import Register from "./Auth/Register";
import { useAuth } from "./providers/auth";
import { ProfileProvider } from "./providers/profile";
import Comment from "./Pages/Posts/comments/Comment";
import Post from "./Pages/Posts/Post";
import SearchResult from "./Pages/Search/SearchResult";
import Appointement from "./Pages/Request/Appointement";
import Sidebar from "./Header/Sidebar";
import SidebarClose from "./Header/SidebarClose";
import React, { useState, useEffect } from "react";
import Favourite from "./Pages/Favourite/Favourite";
import AboutUs from "./Header/AboutUs";
import Calender from "./Components/Calender";
import Notification from "./Pages/Notification/Notification";
import PrivateRoute from "./PrivateRoute";
import VerifyEmail from "./Auth/VerifyEmail";
import Landing_page from "./Pages/Home/Landing_page";

const App = () => {
  const auth = useAuth();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <BrowserRouter>
        <Header setOpen={setOpen} open={open} />
        <SidebarClose setOpen={setOpen} open={open} />
        <Sidebar open={open} />
        <div className="flex w-full mt-16  dark:bg-color-16 bg-color-3 relative">
          <VerticalNav />
          <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/explore" element={<Home />} />
            <Route
              path="login"
              element={
                auth.user._id ? (
                  <Navigate replace to="/explore" />
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
              path="/:email/:token"
              element={
                auth.user.isVerified ? (
                  <Navigate replace to="/profile" />
                ) : (
                  <VerifyEmail />
                )
              }
            />
            <Route
              path="/VerifyEmail"
              element={
                !auth.user._id ?
                  <Navigate replace to="/explore" />
                  :
                  auth.user.isVerified ? (
                    <Navigate replace to="/explore" />
                  ) : (
                    <VerifyEmail />
                  )
              }
            />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/showProfile/:id?" element={<ShowProfile />} />
              <Route path="/dummy" element={<Dummy />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/appointement" element={<Appointement />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/notification" element={<Notification />} />
            </Route>
            <Route path="/search/:catName?" element={<SearchResult />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/postcontent/:id?" element={<Post />} />
            <Route path="/aboutus" element={<AboutUs />} />
            

            <Route path="*" element={<Dummy />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
