import React from "react";
import cat_image8 from "../assets/Online learning-amico.png";

function AboutUs() {
  return (
    <div className="ml-16 bg-white justify-center rounded-3xl flex items-center w-full h-screen ">
      <div className="w-1/2 gap-7 px-2 flex flex-col p-2">
        <h1 className="font-bold font-font-primary text-color-14 text-6xl">ABOUT US</h1>
        <p className="px-2">
                 MyTutor is an Indian organization and an authentic destination for
          all your learnings. We provide students, tutors and institutions with
          simplified and accurate results based on their needs. Our aim is to
          make learning and sharing knowledge accessible, affordable and
          valuable. Students can choose any academic subject they wish to learn
          and any skill they wish to master by benefiting from our verified
          tutors. You can choose from the wide range of options that interest
          you. We will help you reach out to qualified teachers across the
          country from the ease of your rooms. Similarly, teachers, tutors,
          institutions can offer one or more subject areas to showcase their
          expertise and assist the students via their preferred mediums. At our
          platform, you can also create and present workshops on your selected
          topics. We are a trusted channel intending to connect the teacher and
          learner. 
          </p>
          <p className="px-2">
           MyTutor will help each and everyone to achieve their goals
          and gain proficiency in their required areas.
          </p>
      </div>
      <div className=" w-1/2 flex justify-center p-2 h-full">
        <img className="h-[70%] w-[75%]" src={cat_image8}></img>
      </div>
    </div>
  );
}

export default AboutUs;
