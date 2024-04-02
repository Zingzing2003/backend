import  Express  from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
import connectDB from './config/connectDB';
import bodyParser from "body-parser";

require("dotenv").config();


const app= Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// config view
configViewEngine(app);
 
//init web r

initWebRoutes(app);

connectDB(); 

const PORT= process.env.PORT|| 8080;
const hostname= 'localhost';
app.listen(PORT, ()=>
{
    console.log("hello");
});