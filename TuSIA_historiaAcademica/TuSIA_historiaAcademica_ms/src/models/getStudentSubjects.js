import {getConnection} from "../database/database"

const getStudentSubjects= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        
        const {id}=req.params

        result=await connection.query("SELECT * FROM student_subject WHERE id_story= ?", id)
        
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getStudentSubjects}