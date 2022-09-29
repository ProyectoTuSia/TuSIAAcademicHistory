import {getConnection} from "../database/database"

const getAllCareerCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        result=await connection.query("SELECT * FROM career_credits")
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getAllCareerCredits}