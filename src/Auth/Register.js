import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUser, register } from "../App/Api";
import loginImage from '../assets/bacground4.jpg'
// import Google from '../assets/Google-logo.png'
import { useAuth } from "../providers/auth";
import Loader from "../Components/Helper/Loader";

export default function Register() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confiPass, setConfiPass] = useState('')
   const [error, setError] = useState('Please enter your details.')

   const auth = useAuth()



   async function fetchData() {
      if (password !== confiPass) {
         setError("Password does not match")
         return
      }
      auth.setLoading(true)
      const res = await register({
         name, email, password
      });
      if (res.error) {
         //error
         setError(res.error.errMessage)
         auth.setLoading(false)
      } else if (res.payload) {
         auth.setUser(res.payload)
         localStorage.setItem('_id', res.payload._id)
         auth.setLoading(false)
      }
   }


   return (
      <div className="w-full ml-16 sm:ml-0  h-screen xs:flex xs:flex-col flex items-start">
         <div className="relative w-1/2 h-full flex flex-col xs:hidden sm:hidden ">
            <div className="absolute top-[25%] left-[10%] flex flex-col">
               <h1 className="text-6xl text-white font-bold my-4 drop-shadow-xl">Welcome To My Tutor</h1>
               <p className="text-2xl text-white font-semibold drop-shadow-xl">Start for free</p>
            </div>
            <img className="w-full  h-full object-cover" src={loginImage} />
         </div>

         <div className="w-1/2 xs:w-full sm:w-full sm:p-7 dark:bg-zinc-700 dark:text-white xs:bg-[#ffff] xs:ml-2 xs:justify-center sm:justify-center xs:gap-4 sm:gap-3   mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
            <h1 className="text-4xl text-stone-700 dark:text-white font-bold">My Tutors</h1>

            <div className="w-full xs:w-full flex flex-col max-w-[500px] ">
               <div className="w-full flex flex-col mb-2">
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white text-stone-700">Register</h3>
                  <p className="text-sm mb-2 text-red-600">{error}</p>
               </div>
               <div className="w-full flex flex-col">
                  <input className="w-full dark:text-white text-black py-2 px-1 my-2 bg-transparent dark:border-b dark:border-white border-b border-stone-700 outline-none focus:outline-none"
                     type="text"
                     placeholder="FullName"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <input className="w-full px-1 dark:text-white text-black py-2 my-2 bg-transparent dark:border-b dark:border-white border-b border-stone-700 outline-none focus:outline-none"
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className="w-full text-black dark:text-white py-2 px-1 my-2 bg-transparent dark:border-b dark:border-white border-b border-stone-700 outline-none focus:outline-none"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <input className="w-full px-1 dark:text-white text-black py-2 my-2 bg-transparent dark:border-b dark:border-white border-b border-stone-700 outline-none focus:outline-none"
                     type="password"
                     placeholder="ConfirmPassword"
                     value={confiPass}
                     onChange={(e) => setConfiPass(e.target.value)}
                  />
               </div>

               <div className="w-full flex flex-col my-4">

                  {
                     auth.loading ?
                        <button className="w-full text-white my-2 bg-[#78653b] rounded-md p-4 text-center flext items-center justify-center shadow-sm shadow-slate-500 cursor-pointer"
                           disabled={true}

                        >
                           loading...
                        </button>
                        :
                        <button className="w-full text-white my-2 bg-[#fbb110] rounded-md p-4 text-center flext items-center justify-center sm:w-[95%] shadow-sm shadow-slate-500 cursor-pointer"
                           onClick={() => fetchData()}
                        >
                           Register
                        </button>
                  }

               </div>

               <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w=full h-[1px] bg-black"></div>
                  <p className=" text-lg absolute text-black/80 bg-[#f5f5f5] dark:bg-zinc-700 dark:text-white">or</p>
               </div>


            </div>
            <div className="w-full flex items-center justify-center">
               <p className="text-sm font-normal dark:text-white text-[#060606]">You have already account
                  <Link to={'/login'}>

                     <span className="font-semibold text-base underline-offset-2 dark:underline dark:text-[#1cb8e7] cursor-pointer"> Log in </span>
                  </Link>
               </p>
            </div>

         </div>
      </div >
   )
}