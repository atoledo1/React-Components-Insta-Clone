import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [instaData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {instaData.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;
