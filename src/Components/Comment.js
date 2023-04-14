import {  useState } from "react";

import "../Components/Styles/Comment.scss";

// import AddComment from "./AddComment";
 
import DeleteModal from "../Components/DeleteModal";
 
import CommentHeader from "../Components/CommentHeader";
 

// import { commentPostedTime } from "../utils";

const Comment = ({
  commentData,
  
  editComment,
  commentDelete,
  setDeleteModalState,
}) => {
  
  const [time] = useState("");
  
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(commentData.content);
  const [deleting, setDeleting] = useState(false);

   

 

  const updateComment = () => {
    editComment(content, commentData.id, "comment");
    setEditing(false);
  };

  const deleteComment = (id, type) => {
    const finalType = type !== undefined ? type : "comment";
    const finalId = id !== undefined ? id : commentData.id;
    commentDelete(finalId, finalType, commentData.id);
    setDeleting(false);
  };

  return (
    <div
      className={`comment-container`}
    >
      <div className="comment">
        
        <div className="comment--body">
          <CommentHeader
            commentData={commentData}
            
            setDeleting={setDeleting}
            setDeleteModalState={setDeleteModalState}
            setEditing={setEditing}
            time={time}
          />
          {!editing ? (
            <div className="comment-content">{commentData.content}</div>
          ) : (
            <textarea
              className="content-edit-box"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          )}
          {editing && (
            <button className="update-btn" onClick={updateComment}>
              update
            </button>
          )}
        </div>
        
      </div>

      

      {deleting && (
        <DeleteModal
          setDeleting={setDeleting}
          deleteComment={deleteComment}
          setDeleteModalState={setDeleteModalState}
        />
      )}
    </div>
  );
};

export default Comment;
