import React from 'react'
import { Link } from 'react-router-dom'

function EditReq({ type, item, onClickEdit, onDeletePost }) {

  console.log('item', item)

  if (type == 'requestSend')
    return (
      <div className="absolute z-[1] right-2 w-[150px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-color-8 border-[1px] border-color-6 h-auto   flex flex-col">
        <Link to={"/postcontent/" + item.postId} >
          <label className='p-1 w-fit'>Edit Request</label>
        </Link>
        {/* <label>Delete</label> */}
      </div >
    )
  else if (type == 'requestRecieved')
    return (
      <div className="absolute z-[1] right-2 w-[150px] text-color-2 top-1 text-sm font-semibold pl-4 rounded-xl bg-color-8 border-[1px] border-color-6 h-auto   flex flex-col">
        <Link to={"/postcontent/" + item.postId} >
          <label className='p-1 w-fit'>View Requests</label>
        </Link>
        {/* <label>Delete</label> */}
      </div >
    )
  else if (type == 'post')
    return (
      <div className="absolute z-[1] right-2 w-[150px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-color-8 border-[1px] border-color-6 h-auto   flex flex-col">
        {/* <Link to={"/postcontent/" + item.postId} > */}
        <label className='p-1 w-fit'
          onClick={() => onClickEdit(item)}
        >Edit Post</label>
        {/* </Link> */}
        {/* <label
          onClick={() => onDeletePost(item)}
        >Delete</label> */}
      </div >
    )
  else
    return (
      <div className="absolute z-[1] right-2 w-[100px] text-black  top-1 text-sm font-semibold pl-4 rounded-xl bg-color-8 border-[1px] border-color-6 h-auto   flex flex-col">
        <label>something</label>
        <label>something</label>
      </div>
    )
}

export default EditReq