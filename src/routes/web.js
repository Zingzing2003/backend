import  Express  from "express";
import {handleHome, handleUser, handleCrud,postCRUD} from "../controller/homeController";
const router = Express.Router();
// app- ep app

const initWebRoutes= (app)=>{
    router.get("/",handleHome);
    
    router.get("/user", handleUser);
    router.get("/crud", handleCrud);
    router.post("/user/create-user", postCRUD);

    
    
    return app.use("/", router);
}

export default initWebRoutes;