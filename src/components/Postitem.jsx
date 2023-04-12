import React from "react";
import MyButton from "../UI/button/MyButton";

const Postitem = (props) => {
  return (
      <div className="post">
        <div className="post__contant">
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post___btns">
          <MyButton onClick={()=>props.delete(props.post)}>delete</MyButton>
        </div>
      </div>
  );
};

export default Postitem;
