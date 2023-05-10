import React from 'react'
import { Link } from 'react-router-dom'

function EditReq({ type, item, onClickEdit }) {

  console.log('item', item)

  if (type == 'requestSend')
    return (
      <div className="absolute z-[1] right-2 w-[150px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-slate-300 border-2 border-slate-500 h-auto   flex flex-col">
        <Link to={"/postcontent/" + item.postId} >
          <label className='p-1 w-fit'>Edit Request</label>
        </Link>
        {/* <label>Delete</label> */}
      </div >
    )
  else if (type == 'requestRecieved')
    return (
      <div className="absolute z-[1] right-2 w-[150px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-slate-300 border-2 border-slate-500 h-auto   flex flex-col">
        <Link to={"/postcontent/" + item.postId} >
          <label className='p-1 w-fit'>Sell All Requests</label>
        </Link>
        {/* <label>Delete</label> */}
      </div >
    )
  else if (type == 'post')
    return (
      <div className="absolute z-[1] right-2 w-[150px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-slate-300 border-2 border-slate-500 h-auto   flex flex-col">
        {/* <Link to={"/postcontent/" + item.postId} > */}
        <label className='p-1 w-fit'
          onClick={() => onClickEdit(item)}
        >Edit Post</label>
        {/* </Link> */}
        {/* <label>Delete</label> */}
      </div >
    )
  else
    return (
      <div className="absolute z-[1] right-2 w-[100px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-slate-300 border-2 border-slate-500 h-auto   flex flex-col">
        <label>something</label>
        <label>something</label>
      </div>
    )
}

export default EditReq