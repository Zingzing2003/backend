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
    let Email= data.email;
    let fullName= data.fullname;
    let Address= data.age;
    let StudentBirth= data.birthday;
    let ParentName= data.parentName;
    let PhoneNumber= data.phonenumber;
    let classId= data.role;



    // let hashPasswordFromBcrypt= "1233";
    // let email= "dataemail";
    // let fullName= "datafullname";
    // let StudentAge="0";
    // let StudentBirth=" databirthday";
    // let ParentName= "dataparentName";
    // let ParentPhone= "dataphonenumber";
    // let classId= "CL01";
        let id= "ST099";
        let UserId;
        let UserName= data.userName;;
   
    try{
        const [results]= await connection.query(
            `INSERT INTO users (UserName,Password)
            VALUE (?,?)`,
            [UserName, hashPasswordFromBcrypt],
        );
        UserId= results.UserId;
    }catch(err){
        console.log(err);
        //console.log("loi");
    }

    try{
        const [results]= await connection.query(
            `INSERT INTO student ( StudentName,StudentBirth,Address,ParentName,Email,PhoneNumber,UserId,ClassId)
            VALUE (?,?,?,?,?,?,?,?)`,
            [fullName,StudentBirth,Address,ParentName,Email,PhoneNumber,UserId,classId],
        );
        console.log();
    }catch(err){
        console.log(err);
        //console.log("loi");
    }
    //console.log(hashPasswordFromBcrypt);
    console.log(fullName);
    // try{
    //     const [results]= await connection.query(
    //         `INSERT INTO course (CourseId, CourseName) VALUE (?,?)`,['c011', 'dinh']
    //     );
    // }catch(err){
    //     console.log(err);
    // }
}
