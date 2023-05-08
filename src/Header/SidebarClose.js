import React from 'react'

function SidebarClose({setOpen,open}) {
  return (
    <div className={`SidebarClose z-[7] w-full h-screen fixed top-0 left-0 bg-slate-400  opacity-[.5]  ${open?"SidebarClose-open block":"SidebarClose-close hidden"}`}  onClick={()=>{setOpen(!open)}}>

    </div>
  )
}

export default SidebarClose;