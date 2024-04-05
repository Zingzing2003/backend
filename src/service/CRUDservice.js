import bcrypt from'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import connection from '../config/database';

const hashUserPassword= (password)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let hashPassword= await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e){
            reject(e);
        }
    })
}
export const createNewUser= async (data)=>{
    let hashPasswordFromBcrypt= await hashUserPassword(data.password);
    let email= data.email;
    let fullName= data.fullname;
    let StudentAge= data.age;
    let StudentBirth= data.birthday;
    let ParentName= data.parentName;
    let ParentPhone= data.phonenumber;
    let classId= data.role;
    let id= 'ST99';
   
    try{
        const [results]= await connection.query(
            `INSERT INTO student (StudentId, email,password,StudentName,StudentAge,StudentBirth,ParentName,ParentPhone,ClassId)
            VALUE (?,?,?,?,?,?,?,?,?)`
            [id,email,hashPasswordFromBcrypt,fullName,StudentAge,StudentBirth,ParentName,ParentPhone,classId],
        );
        console.log(email,hashPasswordFromBcrypt,fullName,StudentAge, StudentBirth,ParentName,ParentPhone  ,classId);
    }catch(err){
        //console.log(err);
        console.log("loi");
    }
    
    //console.log(hashPasswordFromBcrypt);
    console.log(fullName);
}
