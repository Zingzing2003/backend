export const handleHome= (req, res)=>{
    // model=> get dât from database 
    return res.render("home.ejs")
}
export const handleUser= (req, res) =>{
    return res.render("user.ejs")
}