import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUser, register } from "../App/Api";
import loginImage from '../assets/bacground4.jpg'
import Google from '../assets/Google-logo.png'
import { useAuth } from "../providers/auth";

export default function Register() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confiPass, setConfiPass] = useState('')
   const [error, setError] = useState('Please enter your details.')

   const auth = useAuth()

   async function fetchData() {
      const res = await register({
         name, email, password
      });
      if (res.data.error) {
         //error
         setError(res.data.error.errMessage)
      } else if (res.data.payload) {
         auth.setUser(res.data.payload)
         localStorage.setItem('_id', res.data.payload._id)
      }
   }

   return (
      <div className="w-full h-screen xs:flex xs:flex-col flex items-start">
         <div className="relative w-1/2 h-full flex flex-col xs:hidden">
            <div className="absolute top-[25%] left-[10%] flex flex-col">
               <h1 className="text-6xl text-white font-bold my-4 drop-shadow-xl">Welcome To My Tutor</h1>
               <p className="text-2xl text-white font-semibold drop-shadow-xl">Start for free and get attractive offers from the community</p>
            </div>
            <img className="w-full h-full object-cover" src={loginImage} />
         </div>

         <div className="w-1/2 xs:w-full xs:p-8 xs:bg-[#ffff] xs:ml-2 xs:justify-center xs:gap-4   mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
            <h1 className="text-4xl text-stone-700 font-bold">My Tutors</h1>

            <div className="w-full xs:w-full flex flex-col max-w-[500px] ">
               <div className="w-full flex flex-col mb-2">
                  <h3 className="text-2xl font-semibold mb-2 text-stone-700">Register</h3>
                  <p className="text-sm mb-2">{error}</p>
               </div>
               <div className="w-full flex flex-col">
                  <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none"
                     type="text"
                     placeholder="FullName"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none"
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none"
                     type="password"
                     placeholder="ConfirmPassword"
                     value={confiPass}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>

               <div className="w-full flex flex-col my-4">
                  <button className="w-full text-white my-2 bg-[#fbb110] rounded-md p-4 text-center flext items-center justify-center shadow-sm shadow-slate-500 cursor-pointer"
                     onClick={() => fetchData()}
                  >
                     Register
                  </button>
               </div>

               <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w=full h-[1px] bg-black"></div>
                  <p className=" text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
               </div>


            </div>
            <div className="w-full flex items-center justify-center">
               <p className="text-sm font-normal text-[#060606]">You have already account
                  <Link to={'/login'}>

                     <span className="font-semibold text-base underline-offset-2 cursor-pointer"> Log in </span>
                  </Link>
               </p>
            </div>

         </div>
      </div>
   )
}