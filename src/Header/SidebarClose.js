import React from 'react'

function SidebarClose({click,open}) {
  return (
    <div className={open?"SidebarClose SidebarClose-open":"SidebarClose"} onClick={click}>

    </div>
  )
}

export default SidebarClose;