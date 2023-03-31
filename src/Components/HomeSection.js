import React from 'react'
import VerticalNav from "./VerticalNav";
import Home from "./Home"


function HomeSection() {
  return (
    <div className="flex h-calc-16  bg-indigo-100 dark:bg-zinc-900 xs:flex-col-reverse xs:relative xs:p-1">
    <VerticalNav/>
    <Home />
  </div>
  );
};

export default HomeSection