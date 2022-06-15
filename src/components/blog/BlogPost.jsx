import React from "react";
import "./blog.css";
import ProfilePic from "../assets/dp.svg";
import axios from "axios";

const BlogPost = ({data}) => {

  return (
    <div className="blog-post">
      <div className="blog-qoute">
        <span>“</span>
      </div>
      <p>
      {data.Reviews}
     
      </p>
      <div className="blog-profile">
        <img src={ProfilePic} alt="" />
        <div className="profile-name">
          <h6>{data.Name}
          </h6>
          <p>Patient</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
