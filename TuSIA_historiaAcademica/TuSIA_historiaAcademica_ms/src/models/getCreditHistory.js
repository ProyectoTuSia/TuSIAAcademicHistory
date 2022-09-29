import {getConnection} from "../database/database"

const getCreditHistory= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const {id}=req.params

        result=await connection.query("SELECT * FROM student_credits_approved JOIN student_credits_pending USING (id_story) JOIN student_credits_signed USING (id_story) JOIN student_credits_taken USING (id_story) WHERE student_credits_approved.id_story= ?", id)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getCreditHistory}