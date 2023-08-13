import React from "react";
import landingimage1 from "../../assets/landingimage1-removebg-preview.png";
import landingimage2 from "../../assets/tutorial.png";
import landingimage3 from "../../assets/landing2.png";
import landingimage4 from "../../assets/landing4.png";
import landingimage5 from "../../assets/landing5.png";
import landingimage6 from "../../assets/landing6.png";
import landingimage7 from "../../assets/YT Thumbnail1.png";
import landingimage8 from "../../assets/YT Thumbnail2.png";
import landingimage9 from "../../assets/YT Thumbnail3.png";
import landingimage10 from "../../assets/landing10.png";

function Landing_page() {
  return (
    <div className="ml-16 h-auto w-full flex flex-col items-center bg-white ">
      <div className="flex flex-col w-[45%] absolute mt-[8%]    items-center">
        <h1 className="text-5xl font-extrabold mt-2 text-color-16">
          {" "}
          Your Knowledge Sharing{" "}
        </h1>
        <h1 className="text-5xl font-extrabold mb-2 text-color-16">Platform</h1>
        <p className="text-[#898CA9] text-[15px]">
          Are you passionate about sharing your expertise and knowledge with
          others?{" "}
        </p>{" "}
        <p className="text-[#898CA9] text-[15px]">
          Do you have unique skills or insights that could benefit someone else?{" "}
        </p>{" "}
        <p className="text-[#898CA9] text-[15px]">
          Look no further – MyTutor is here.
        </p>
        <button className="w-28 mt-7 border text-color-3 border-color-7 h-auto p-2 rounded-lg bg-gradient-to-r from-[#933FFE] to-[#18C8FF]">
          Explore
        </button>
      </div>
      <div className="flex justify-around items-center   mt-[17%]   pt-5 w-full">
        <div>
          <img src={landingimage1} className="h-60 w-72"></img>
        </div>
        <div>
          <img src={landingimage2} className="h-60 w-72"></img>
        </div>
      </div>
      <div className="flex flex-col w-[45%]  mt-[11%]    items-center">
        <h1 className="text-5xl font-extrabold mt-2 text-color-16">
          {" "}
          Why Choose MyTutor?{" "}
        </h1>
        <p className="text-[#898CA9] mt-4 text-[15px]">
          Are you passionate about sharing your expertise and knowledge with
          others?{" "}
        </p>{" "}
        <p className="text-[#898CA9] text-[15px]">
          Do you have unique skills or insights that could benefit someone else?{" "}
        </p>{" "}
        <p className="text-[#898CA9] text-[15px]">
          Look no further – MyTutor is here.
        </p>
      </div>
      <div className="w-[80%] flex mt-[7%] items-center justify-around ">
        <div className="w-1/2">
          <img src={landingimage3}></img>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold mt-2 text-color-16">
            Empower Others
          </h1>
          <p>
            Your knowledge is valuable. By becoming a tutor on MyTutor, you'll
            be empowering individuals to expand their horizons and achieve their
            goals.
          </p>
        </div>
      </div>

      <div className="w-[80%] flex mt-[7%] items-center justify-around ml-10">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold mt-2 text-color-16">
            Earn While Sharing
          </h1>
          <p>
            Turn your expertise into earnings. Receive compensation for the
            knowledge you share with learners.
          </p>
        </div>
        <div className="w-1/2">
          <img className="ml-10" src={landingimage4}></img>
        </div>
      </div>

      <div className="w-[80%] flex mt-[7%] items-center justify-around ">
        <div className="w-1/2">
          <img className="h-60 ml-10 w-80" src={landingimage5}></img>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold mt-2 text-color-16">
            Seamless Video Calls
          </h1>
          <p>
            Our platform provides a smooth and secure video calling experience.
            Connect with your students from anywhere in the world.
          </p>
        </div>
      </div>
      <div className="w-[80%] flex mt-[7%] items-center justify-around ml-10">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold mt-2 text-color-16">
          Flexible Schedule
          </h1>
          <p>
          Set your availability according to your convenience. MyTutor lets you manage your time and commitments effortlessly.
          </p>
        </div>
        <div className="w-1/2">
          <img className="ml-10" src={landingimage6}></img>
        </div>
      </div>
      <div className="flex flex-col w-[45%]  mt-[11%]    items-center">
        <h1 className="text-5xl font-extrabold mt-2 text-color-16">
          {" "}
          Key Features of MyTutor{" "}
        </h1>
        <p className="text-[#898CA9] mt-4 text-[15px]">
          "Unlock the Power of Direct Learning. Your Expertise, Your Connection,
          Your Earnings."
        </p>{" "}
      </div>
      <div className="flex gap-10 justify-center w-full mt-7">
        <div>
          <img src={landingimage7} className="h-60 w-72"></img>
        </div>
        <div>
          <img src={landingimage8} className="h-60 w-72"></img>
        </div>
        <div>
          <img src={landingimage9} className="h-60 w-72"></img>
        </div>
      </div>
      <div className="flex flex-col w-[45%]  mt-[11%]    items-center">
        <h1 className="text-5xl font-extrabold mt-2 text-color-16">
          {" "}
          How It Works:{" "}
        </h1>
      </div>
      <div className="flex relative">
        <div className="w-full ">
          <img className=" " src={landingimage10}></img>
        </div>
        <div className="absolute w-[70%] flex flex-col -right-52 top-28">
          <label className="mt-5 text-2xl text-color-16 font-semibold">
            Step 1. Sign Up
          </label>
          <p className="text-[#898CA9]">
            Create your MyTutor profile, showcasing your skills, expertise, and
            availability.
          </p>
          <label className="mt-5  text-2xl text-color-16 font-semibold">
            Step 2. Browse Requests
          </label>
          <p className="text-[#898CA9]">
            Browse through learner requests for specific topics or skills.
            Choose the ones that align with your expertise.
          </p>

          <label className="mt-5  text-2xl text-color-16 font-semibold">
            Step 3. Schedule Sessions
          </label>
          <p className="text-[#898CA9]">
            Coordinate with learners to schedule video call sessions at mutually
            convenient times.
          </p>

          <label className="mt-5  text-2xl text-color-16 font-semibold">
            Step 4. Share Knowledge
          </label>
          <p className="text-[#898CA9]">
            During the video call, engage with your learners, share your
            insights, and guide them on their learning journey.
          </p>

          <label className="mt-5  text-2xl text-color-16 font-semibold">
            Step 5. Get Rewarded
          </label>
          <p className="text-[#898CA9]">
            Earn rewards for your time and expertise. The more you share, the
            more you earn!
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[45%] mt-[8%] mb-20   items-center">
        <h1 className="text-5xl font-extrabold mt-2 text-color-16">
          {" "}
          Ready to Get Started?{" "}
        </h1>
        <p className="text-[#898CA9] text-[12px] ml-10 mt-5">
          Join the MyTutor community today and make a positive impact on
          someone's learning experience. Whether you're a student seeking
          guidance or a tutor eager to share your knowledge, MyTutor brings you
          a world of learning opportunities.{" "}
        </p>{" "}
        <button className="w-28 mt-7 border text-color-3 border-color-7 h-auto p-2 rounded-lg bg-gradient-to-r from-[#933FFE] to-[#18C8FF]">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Landing_page;
