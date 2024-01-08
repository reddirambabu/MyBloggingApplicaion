import React from "react"
import {useEffect , useState} from 'react' ;
import "./blog.css"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import { blog as staticBlogData } from "../../assets/data/data"; 
import axios from 'axios'

export const Blog = () => {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allBlogs");
        setBlog(response.data); // Update blog state with fetched data
        console.log("response data" , response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if necessary
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  const blogCard = (blogArray)=>{
    return (
      <>
      {blogArray.map((item) => (
        <Link to={`/details/${item.id}`} className='link'>
        <div className='box boxItems' key={item.id}>
          <div className='img'>
            <img src={item.photo} alt='' />
          </div>
          <div className='details'>
            <div className='tag'>
              <AiOutlineTags className='icon' />
              <a href='/'>#{item.category}</a>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc.slice(0, 180)}...</p>
            <div className='date'>
              <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
              <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
              <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
            </div>
          </div>
        </div>
        </Link>
      ))}
      </>
    )
  }

  return (
    <>
      <section className='blog'>
        <div className='container grid'>
          {blogCard(staticBlogData)}
          {blogCard(blog)}
        </div>
      </section>
    </>
  )
}
