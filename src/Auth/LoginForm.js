import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { login } from "../App/Api";
import loginImage from '../assets/bacgroun3.jpg'
import { useAuth } from "../providers/auth";

export default function LoginForm() {
   const navaigat = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('Welcome Back! Please enter your details.')

   const auth = useAuth()
   console.log('auth :>> ', auth);

   async function fetchData() {
      const res = await login({
         email, password
      });

      console.log('response :>> ', res);
      if (res.data.error) {
         //error
         setError(res.data.error.errMessage)
      } else if (res.data.payload) {
         auth.setUser(res.data.payload)
         localStorage.setItem('_id', res.data.payload._id)
      }
   }
   return (
      <div className="w-[100%] overflow-auto scrollbar-hide md:scrollbar-default">
         <div className="w=full h-screen flex items-start " >
            <div className="relative w-1/2 h-full flex flex-col">
               <div className="absolute top-[25%] left-[10%] flex flex-col">
                  <h1 className="text-6xl text-white font-bold my-4 drop-shadow-xl">Welcome To My Tutor</h1>
                  <p className="text-2xl text-white font-semibold drop-shadow-xl">Start for free and get attractive offers from the community</p>
               </div>
               <img className="w-full h-full object-cover" src={loginImage} />
            </div>

            <div className="w-1/2  mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
               <h1 className="text-4xl text-[#075985] font-semibold">My Tutor</h1>

               <div className="w-full flex flex-col max-w-[500px] ">
                  <div className="w-full flex flex-col mb-2">
                     <h3 className="text-3xl font-semibold mb-2 text-[#075985]">Login</h3>
                     <p className="text-sm mb-2">{error}</p>
                  </div>
                  <div className="w-full flex flex-col">
                     <input className="w-full text-black py-2 my-2 bg-transparent border-b border-[#075985] outline-none focus:outline-none"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input className="w-full text-black py-2 my-2 bg-transparent border-b border-[#075985] outline-none focus:outline-none"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <div className="w-full flex items-center justify-betwwen">
                     <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget Password?</p>
                  </div>
                  <div className="w-full flex flex-col my-4">
                     <button className="w-full text-white my-2 bg-[#075985] rounded-md p-4 text-center flext items-center justify-center cursor-pointer hover:bg-sky-500/50"
                        onClick={() => fetchData()}
                     >
                        Log in
                     </button>
                     <Link to={'/register'}>
                        <button className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 text-center flext items-center justify-center cursor-pointer hover:bg-gray-400">
                           Register
                        </button>
                     </Link>
                  </div>


               </div>
            </div>
         </div>
      </div>
   )
}