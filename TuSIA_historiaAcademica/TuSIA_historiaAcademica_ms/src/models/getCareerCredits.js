import {getConnection} from "../database/database"

const getCareerCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        
        let {code}=req.params
        if (code===undefined){
            code=req.body.career_code
        }

        result=await connection.query("SELECT * FROM career_credits WHERE code= ?", code)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getCareerCredits}