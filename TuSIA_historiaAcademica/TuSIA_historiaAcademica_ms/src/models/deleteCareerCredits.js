import {getConnection} from "../database/database"

const deleteCareerCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const {code}=req.params

        result=await connection.query("DELETE FROM career_credits WHERE code= ?", code)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {deleteCareerCredits}