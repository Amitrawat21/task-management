import express from "express";
import dotenv from "dotenv";
import "./database/Connection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import userrouter from "./routes/UserRoutes.js";
import taskrouter from "./routes/TaskRoutes.js";
import cloudinary from "cloudinary";
dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://task-management-three-theta.vercel.app', // Replace with your Vercel domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // If you're using cookies or HTTP authentication
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/user", userrouter);
app.use("/task", taskrouter);

const port = process.env.PORT || 3000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.get("/" ,(req , res)=>{
  
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});



////AIzaSyAblbn3N-w_XSytBQunjkT04WlWgzSAwIQ





