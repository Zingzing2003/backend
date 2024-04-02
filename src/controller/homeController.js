import db from '../models/index';
export const handleHome= async (req, res)=>{
    try{
        let data= await  db.User.findAll()
         // model=> get dât from database 
        return res.render("home.ejs")
    }catch(e){
        console.log(e);
    }
    
}
export const handleUser= (req, res) =>{
    return res.render("user.ejs")
}