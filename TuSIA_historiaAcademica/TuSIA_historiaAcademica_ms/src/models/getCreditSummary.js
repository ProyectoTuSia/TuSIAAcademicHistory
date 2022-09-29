import {getConnection} from "../database/database"

const getCreditSummary= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        
        const {id}=req.params

        result=await connection.query("SELECT * FROM credit_summary WHERE id_story= ?", id)
        
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getCreditSummary}