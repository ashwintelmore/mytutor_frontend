import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../App/Api";
import loginImage from '../assets/bacground3.jpg'
import { useAuth } from "../providers/auth";
import Loader from "../Components/Helper/Loader";

export default function LoginForm() {
   const navaigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('Welcome Back! Please enter your details.')

   const auth = useAuth()
   async function fetchData() {
      auth.setLoading(true)
      const res = await login({
         email, password
      });

      if (res.data.error) {
         //error
         setError(res.data.error.errMessage)
         auth.setLoading(false)
      } else if (res.data.payload) {
         auth.setUser(res.data.payload)
         auth.setLoading(false)
         localStorage.setItem('_id', res.data.payload._id)
      }
   }

   console.log('auth', auth)

   return (
      <div className="w-[100%] overflow-auto scrollbar-hide md:scrollbar-default">
         <div className="w-full ml-16 dark:bg-zinc-700 h-screen sm:ml-0 flex items-start xs:flex-col" >
            {/* left field of login */}
            <div className="relative w-1/2 h-full flex flex-col xs:hidden sm:hidden">
               <div className="absolute top-[25%] left-[10%] flex flex-col">
                  <h1 className="text-6xl text-white font-bold my-4 drop-shadow-xl">Welcome To My Tutor</h1>
                  <p className="text-2xl text-white font-semibold drop-shadow-xl">Start for free and get attractive offers from the community</p>
               </div>
               <img className="w-full  h-full object-cover" src={loginImage} />
            </div>
            {/* right fiked of login page */}
            <div className="w-1/2 xs:w-full sm:w-full xs:bg-[#ffff] dark:bg-zinc-700 dark:text-white sm:p-8 xs:mx-1 xs:p-7 xs:justify-evenly sm:justify-evenly sm:mx-1 mx-auto h-full bg-[#f5f5f5] flex flex-col p-20  justify-between items-center">
               <h1 className="text-4xl text-[#075985] dark:text-white font-semibold">My Tutor</h1>

               <div className="w-full flex flex-col  ">
                  <div className="w-full flex flex-col mb-2">
                     <h3 className="text-3xl font-semibold mb-2 dark:text-white text-[#075985]">Login</h3>
                     <p className="text-sm mb-2 text-red-600">{error}</p>
                  </div>
                  <div className="w-full flex flex-col">
                     <input className="w-full text-black px-2 py-2 my-2 bg-transparent border-b dark:text-white dark:border-b dark:border-white border-[#075985] outline-none focus:outline-none"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input className="w-full px-2 text-black py-2 my-2 bg-transparent border-b dark:text-white dark:border-b dark:border-white  dark:border-b   border-[#075985] outline-none focus:outline-none"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <div className="w-full flex items-center justify-betwwen">
                     <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget Password?</p>
                  </div>
                  <div className="w-full flex flex-col my-2 font-semibold text-lg">

                     {
                        auth.loading ?
                           <button className="w-full text-white my-2 bg-[#78653b] rounded-md p-4 sm:p-3 text-center flext items-center justify-center shadow-sm shadow-slate-500 cursor-pointer"
                              disabled={true}

                           >
                              loading...
                           </button>
                           :
                           <button className="w-full text-white my-2 bg-[#fbb110] rounded-md p-4 sm:p-3 text-center flext items-center justify-center shadow-sm shadow-slate-500 cursor-pointer"
                              onClick={() => fetchData()}
                           >
                              Login
                           </button>
                     }
                     <Link to={'/register'}>
                        <button className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 sm:p-3 text-center flex justify-center items-center  cursor-pointer shadow-sm shadow-black hover:bg-gray-400">
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