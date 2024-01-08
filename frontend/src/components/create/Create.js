
import "./create.css"
import React ,{useState} from "react"
import axios from 'axios';


export const Create = () => {
  const [data , setData] = useState({
    title : "", desc : "",
     photo : "https://img.freepik.com/free-photo/close-up-metallic-wine-barrels-winery_1268-15697.jpg?w=1060&t=st=1704664192~exp=1704664792~hmac=e2cc1d9ec8886511746238027fb3ee32052f286371da5d8e9c6f1e4fdcfe37e7",
     username: "",category: ""
  });

  const onChageData = (event)=>{
    setData({...data , [event.target.name]:event.target.value}) ;
  }

  const submitFormCreatePost = (e)=>{
    e.preventDefault();
    console.log("post created" , data)
    axios.post("http://localhost:5000/blogPosting" , data).then(res=>console.log(res));
    setData({
    title : "", desc : "",
     photo : "https://img.freepik.com/free-photo/close-up-metallic-wine-barrels-winery_1268-15697.jpg?w=1060&t=st=1704664192~exp=1704664792~hmac=e2cc1d9ec8886511746238027fb3ee32052f286371da5d8e9c6f1e4fdcfe37e7",
     username: "",category: ""
  })
  }
  

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          
          <form onSubmit={submitFormCreatePost}>
            
            <span>image url *</span>
            <input type='text' placeholder="insert image"  onChange={onChageData} name="photo"  />

            <span>Username *</span>
            <input type='text' placeholder='Username' required onChange={onChageData} name="username"/>
            <span>Title *</span>
            <input type='text' placeholder='Title' required onChange={onChageData} name="title" />
            <span>Category *</span>
            <input type='text' placeholder='Category' required onChange={onChageData} name="category" />
            <span>Description *</span>
            <textarea name='' id='' cols='30' rows='10' placeholder="write a blog description" name="desc" required onChange={onChageData}  ></textarea>
            <button className='button' type="submit">Create Blog</button>
          </form>
        </div>
      </section>
    </>
  )
}
