import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPost } from "../../App/postAPI";
import { useAuth } from "../../providers/auth";
import TagsInput from "../Profile/TagsInput";
import { getAlllCatgories } from "../../App/category.Api";
import { useAlert } from "../../Components/Alert";

function AddPost({ show, setShow }) {
  const auth = useAuth();
  const [showNotification, contextHolder] = useAlert();
  const [userData, setUserData] = useState({
    postTitle: "",
    thumbnailUrl: "",
    charges: "",
    descrp: "",

    postType: "",
    category: "",
    tags: [],
  });

  const [cats, setCats] = useState([]);

  //fetch all categoreis

  useEffect(() => {
    console.log("sff");
    const fetchAllCats = async () => {
      const res = await getAlllCatgories();
      console.log("res", res);
      if (res.error) {
        showNotification(res.error.errMassege);
      } else if (res.payload) {
        setCats(res.payload);
      }
    };
    fetchAllCats();
  }, []);

  const onAddDetails = async () => {
    if (!auth.user._id) return;
    const res = await createPost({
      ...userData,
      createdTutor: auth.user._id,
      createdTutorName: auth.user.name,
      slots: auth.user.slots,
    });
    if (res.error) {
      //handle error
    } else if (res.payload) {
      //handle sussece responce
      setUserData({
        postTitle: "",
        thumbnailUrl: "",
        charges: "",
        descrp: "",
        postType: "",
        category: "",
        tags: [],
      });
    }
    setShow(!show);
  };

  if (!show) return null;
  return (
    // <form action="/" enctype="multipart/form-data">
    <div className="flex w-full  items-center justify-center xs:flex-col absolute   z-10">
      {contextHolder}
      <div className=" bg-[#fff] dark:bg-zinc-800  dark:text-white dark:border relative w-4/6 h-auto px-6 py-10 rounded-3xl flex flex-col  items-center justify-center  shadow-md shadow-slate-600 xs:flex-col xs:w-11/12   ">
        <h2 className="text-[#f48c2b] top-0 left-2 text-3xl px-4 py-3 font-medium absolute ">
          Add Post
        </h2>

        <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
            <label
              className="w-full p-2 text-base xs:text-base"
              htmlFor="slots">
              Post Typle :
            </label>
            <select
              placeholder="select option"
              name="postType"
              className="rounded-xl w-full dark:bg-zinc-800 dark:border shadow-sm shadow-black p-2"
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              value={userData.postType}>
              <option value={""}>Select</option>
              <option value={"learner"}>Learner</option>
              <option value={"tutor"}>Tutor</option>
            </select>
            <label className="text-xs ml-2 p-1">
              Select what is type of your post
            </label>
          </div>
          <div className="flex flex-col   w-[45%] p-2 xs:w-full">
            <label
              className="w-full p-2 text-base xs:text-base"
              htmlFor="slots">
              Post Category :
            </label>
            <select
              placeholder="select option"
              name="category"
              className="rounded-xl dark:bg-zinc-800 dark:border  w-full shadow-sm shadow-black p-2"
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              value={userData.category}>
              <option value={""}>Select</option>
              {cats.map((item, i) => (
                <option value={item.catName} key={i}>
                  {item.catName}
                </option>
              ))}
            </select>
            <label className="text-xs ml-2 p-1">
              Select what is type of your post
            </label>
          </div>
        </div>
        <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
            <label className="w-full p-2 text-base xs:text-base">
              Title Of Post
            </label>
            <input
              className="rounded-xl dark:bg-zinc-800 dark:border  w-full shadow-sm shadow-black p-2"
              type="text"
              name="postTitle"
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              value={userData.postTitle}
            />
            <label className="text-xs ml-2 p-1">Write something</label>
          </div>
          <div className="flex flex-col   w-[45%] p-2 xs:w-full">
            <label className="w-full p-2 text-base xs:text-base">
              {" "}
              Thumbnail{" "}
            </label>
            <input
              className="rounded-xl dark:bg-zinc-800 dark:border  w-full shadow-sm shadow-black p-2"
              type="file"
              name="thumbnailUrl"
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              value={userData.thumbnailUrl}
            />
            <label className="text-xs ml-2 p-1">Write something</label>
          </div>
        </div>

        <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex flex-col   w-[45%]  p-2  xs:w-full  ">
            <label className="w-full text-base p-2 ">Offering Charges</label>
            <input
              className=" dark:bg-zinc-800 dark:border  rounded-xl w-full  p-2 shadow-sm shadow-black"
              type="number"
              name="charges"
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              value={userData.charges}
            />
            <label className="text-xs ml-2 p-1">Per hour</label>
          </div>
          <div className="flex flex-col   w-[45%]  p-2  xs:w-full  ">
            <label className="w-full text-base p-2 ">Tags</label>
            <TagsInput
              setResTags={(e) => setUserData({ ...userData, tags: e })}
              resTags={userData.tags}
              isEditable={true}
            />
            <label className="text-xs ml-2 p-1">Per hour</label>
          </div>
        </div>

        <div className="flex p-1    w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex flex-col  xs:w-full  w-[45%] p-2 justify-around  ">
            <Link to={"/profile"}>
              <label
                className="w-full text-base p-2 text-blue-700 cursor-pointer"
                onClick={() => setShow(!show)}>
                Click here to Update Slots time and date
              </label>
            </Link>
            <label className="text-xs ml-2 p-1">
              You can change time and date slot from your profile
            </label>
          </div>
        </div>

        <div className="p-1">
          <h2>Description :</h2>
          <textarea
            rows={5}
            cols={100}
            className="rounded-2xl dark:bg-zinc-800 dark:border  pl-2 xs:h-24  xs:w-11/12 shadow-sm shadow-black"
            name="descrp"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            value={userData.descrp}></textarea>
        </div>
        <div className="p-1">
          <h2>Choose :</h2>
          <div className="flex gap-1 flex-wrap ">
            <div className="h-44 w-44 bg-black"></div>
            <div className="h-44 w-44 bg-black"></div>
            <div className="h-44 w-44 bg-black"></div>
            <div className="h-44 w-44 bg-black"></div>
            <div className="h-44 w-44 bg-black"></div>
            <div className="h-44 w-44 bg-black"></div>
            <div className="h-44 w-44 bg-black"></div>
          </div>
        </div>
        <div className="flex p-2  xs:justify-evenly gap-3 sm:w-full sm:gap-1  w-full justify-end">
          <button className="btn w-[15%] sm:w-[45%] shadow-sm shadow-black group relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
            <span className="w-0 h-0 rounded bg-[#f68f30]  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <button
              className=" w-full p-2 text-black transition-colors duration-[90] ease-in-out group-hover:text-white z-10"
              onClick={() => onAddDetails()}>
              Add
            </button>
          </button>

          <button className="btn w-[15%] sm:w-[45%] shadow-sm shadow-black relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
            <span className="w-0 h-0 rounded bg-[#f68f30]  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <button
              className=" w-full p-2 text-black transition-colors duration-[90] ease-in-out group-hover:text-white z-10"
              onClick={() => setShow(!show)}>
              Cancel
            </button>
          </button>
        </div>
      </div>
    </div>
    // </form>
  );
}

export default AddPost;
