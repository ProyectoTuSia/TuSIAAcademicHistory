import {getConnection} from "../database/database"

const updateCanceledCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const sum=req.body.total
        result=await connection.query(`UPDATE credit_summary SET canceled_credits=canceled_credits+${sum} WHERE id_story=${id};`)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateCanceledCredits}