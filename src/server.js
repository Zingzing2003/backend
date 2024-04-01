import  Express  from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';


require("dotenv").config();


const app= Express();

// config view
configViewEngine(app);
 
//init web r

initWebRoutes(app);

const PORT= process.env.PORT|| 8080;
const hostname= 'localhost';
app.listen(PORT, ()=>
{
    console.log("hello");
});