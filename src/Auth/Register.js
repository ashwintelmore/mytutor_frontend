import React from "react";
import loginImage from '../assets/bacground4.jpg'
import Google from '../assets/Google-logo.png'

export default function Register(){
    return(
        <div className="w=full h-screen flex items-start">
          <div className="relative w-1/2 h-full flex flex-col">
            <div className="absolute top-[25%] left-[10%] flex flex-col">
               <h1 className="text-6xl text-white font-bold my-4 drop-shadow-xl">Welcome To My Tutor</h1>
                 <p className="text-2xl text-white font-semibold drop-shadow-xl">Start for free and get attractive offers from the community</p>
            </div>
             <img className="w-full h-full object-cover" src={loginImage} />
          </div>

          <div className="w-1/2  mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
              <h1 className="text-4xl text-stone-700 font-bold">My Tutors</h1>
           
           <div className="w-full flex flex-col max-w-[500px] ">
               <div className="w-full flex flex-col mb-2">
               <h3 className="text-3xl font-semibold mb-2 text-stone-700">Register</h3>
                <p className="text-sm mb-2">Please enter your details.</p>
               </div>
              <div className="w-full flex flex-col">
              <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none" type="text"placeholder="FullName" />  
              <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none" type="email"placeholder="Email" />
               <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none" type="password"placeholder="Password" />
               <input className="w-full text-black py-2 my-2 bg-transparent border-b border-stone-700 outline-none focus:outline-none" type="password"placeholder="ConfirmPassword" />
              </div>
               
              <div className="w-full flex flex-col my-4">
                 <button className="w-full text-white my-2 bg-stone-700 rounded-md p-4 text-center flext items-center justify-center cursor-pointer">
                    Register
                 </button>
              </div>

              <div className="w-full flex items-center justify-center relative py-2">
                 <div className="w=full h-[1px] bg-black"></div>
                 <p className=" text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
              </div>
                
              <div className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 text-center flext items-center justify-center cursor-pointer">
                    Sign In with Google
              </div>

            </div>
            <div className="w-full flex items-center justify-center">
                <p className="text-sm font-normal text-[#060606]">You have already account <span className="font-semibold underline-offset-2 cursor-pointer">Log in</span></p>
            </div>

          </div>
    </div> 
    )
}