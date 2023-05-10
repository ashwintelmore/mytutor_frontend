import React from "react";
  import Error from "../../assets/ Error1 (1).png"


const Dummy = () => {
  return (
    <div className=" w-full flex h-screen justify-center items-center  p-2 ml-16">
      <div className="flex flex-col relative w-full items-center justify-center">
      <img src={Error} className="  w-[600px] h-[500px] "></img>
       <h1 className="text-5xl font-bold absolute bottom-[70px] w-auto">Error: Page Not Found !</h1>
      </div>
    </div>
  );
}

export default Dummy;
