import React from "react";
import Postitem from "../components/Postitem";

const PostList = ({ posts, title = "", remove }) => {
  if (!posts.length) {
    return <h1>No date</h1>;
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      {posts.map((post, i) => (
        <Postitem number={i + 1} delete={remove} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
