const express = require("express") ;
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const Blog = require("./models/Blog");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(express.json());
app.use(cors({origin:"*"}));

mongoose.connect('mongodb+srv://rrambabu:rrambabu@cluster0.jlxsjau.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("DB is successfully connected")).catch(e=>console.log("DB is not connected ", e));


app.get("/" , (request , response)=>{
    return response.send("Backend server is running in port 5000")
})


// middleware function authenticate token verify 
const authenticateToken = (request, response, next) => {
    try{
        let jwtToken = request.header("x-token");
        if (!jwtToken) {
            response.status(401);
            response.send("Invalid JWT Token");
        } else {
            let decode = jwt.verify(jwtToken, "MY_SECRET_TOKEN");
            console.log(decode , "decode")
            request.userDetails = decode
            next();
        }
    }catch(error){
        console.log("authenticateToken error : ", error) ;
        return response.status(500).send("server error");
    }
  };



//REGISTER API 
app.post("/register" , async (request , response)=>{
    try{
        const {username, email,profilePic}= request.body ;
        let {password} = request.body ;
        const hashedPassword = await bcrypt.hash(password , 10) ;
        password = hashedPassword ;
        const exist = await User.findOne({email}) ;
        if(exist){
            return response.status(400).send("User Already Registered");
        }
        let newUser = new User({username , email, password , profilePic});
        newUser.save() ;
        return response.status(200).send("User Successfully Registered");

    }catch(error){
        console.log("registration error : ", error) ;
        return response.status(500).send("server error");
    }
})


// LogIn API 
app.post("/login" , async (request , response)=>{
    try{
        const {username , password} = request.body ;
        const exist = await User.findOne({username}) ;
        if (!exist){
            return response.status(400).send("User doesn't exist");
        }else{
            const isMatchedPassword = await bcrypt.compare(password, exist.password) ;
            if (isMatchedPassword === true){
                let userDetails = {
                    id : exist.id , 
                    username : username 
                }
                const jwtToken = jwt.sign(userDetails , "MY_SECRET_TOKEN" , {expiresIn :'20h' } )
                return response.status(200).send({message:"LogIn success" , token : jwtToken});
            }else{
                return response.status(400).send("Invalid Password"); 
            }
        }
    }catch(error){
        console.log("login error : ", error) ;
        return response.status(500).send("server error");
    }
})


//Get All Users Profile API 
app.get("/allProfiles" ,authenticateToken, async (request , response) =>{
    try{
        let allProfiles = await User.find() ;
        return response.status(200).json(allProfiles) ;
    }catch(error){
        console.log("Profiles error : ", error) ;
        return response.status(500).send("server error");
    }
})


//Get Single Users Profile API 
app.get("/myProfile" ,authenticateToken, async (request , response) =>{
    try{
        let myProfiles = await User.findById(request.userDetails.id) ;
        return response.status(200).json(myProfiles) ;
    }catch(error){
        console.log("Profile error : ", error) ;
        return response.status(500).send("server error");
    }
})






//Blog API STARTING 

app.post("/blogPosting" ,authenticateToken, async (req , res)=>{
    try{
        const {title, desc, photo, username,category} = req.body ;
        let newBlog = new Blog({title, desc, photo, username,category}) ;
        newBlog.save();
        return res.status(200).send("Blog Successfully Created");
    }catch(error){
        console.log("blogPosting error : ", error) ;
        return response.status(500).send("server error");
    }
})


app.get("/allBlogs" , async (request , response) =>{
    try{
        let allBlogs = await Blog.find() ;
        return response.status(200).json(allBlogs) ;
    }catch(error){
        console.log("allBlogs error : ", error) ;
        return response.status(500).send("server error");
    }
})




app.listen(5000 , ()=>console.log("Backend server is running in port 5000")) ;