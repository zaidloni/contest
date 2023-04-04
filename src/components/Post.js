import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
  let { userId, id, title, body } = post;
  body = body.slice(0, 100) + " Read More...";
      const navigate = useNavigate();

  function handleClick(e){
    let id = e.target.parentElement.id;
        navigate(`/item/` + id);

  }

  return (
    <div id={id} className="post" onClick={(e) => handleClick(e)}>
      <img src={`https://picsum.photos/200?random=` + id} alt="abc" />
      <p>
        <b>User ID:</b> {userId}
      </p>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Body:</b> {body}
      </p>
    </div>
  );
};

export default Post;
