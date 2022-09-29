import {getConnection} from "../database/database"

const newStudentCreditsTaken= async (id_story) =>{
    const connection= await getConnection()
    let result
    try{
        result=await connection.query(`INSERT INTO student_credits_taken (id_story) values('${id_story}');`)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {newStudentCreditsTaken}