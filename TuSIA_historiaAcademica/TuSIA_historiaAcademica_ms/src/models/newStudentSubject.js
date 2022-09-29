import {getConnection} from "../database/database"

const newStudentSubject= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const{subject_code, tipology, period, grade, outcome}=req.body
        const subject={subject_code, tipology, period, grade, outcome}
        subject.id_story=parseInt(id)
        console.log(subject)
        result=await connection.query("INSERT INTO student_subject set ?",subject)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {newStudentSubject}