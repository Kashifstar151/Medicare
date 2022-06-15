import React,{useState,useEffect} from "react";
import "./blog.css";
import BlogPost from "./BlogPost";
import { Container } from "react-bootstrap";
import axios from "axios";
const Blog = () => {
  const [review,setReview]=useState([])
    const reviewSection=async()=>{
     const res= await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
    const {data}=res.data
    if(data?.length>0){
      setReview(data)
    }
    }
    useEffect(()=>{
      reviewSection()
    },[])

  return (
    <Container>
      <div className="blog row">
        <h2>What Our Customers Say</h2>
        {review && review?.length >0 && review.map((el)=>{
          return(
            <BlogPost data={el}/>
          )
          
        })}
      </div>
    </Container>
  );
};

export default Blog;
