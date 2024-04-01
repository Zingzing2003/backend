import  Express  from "express";
import {handleHome, handleUser} from "../controller/homeController";
const router = Express.Router();
// app- ep app

const initWebRoutes= (app)=>{
    router.get("/",handleHome);
    router.get("/user", handleUser);
    return app.use("/", router);
}

export default initWebRoutes;