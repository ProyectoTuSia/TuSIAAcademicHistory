import {getConnection} from "../database/database"

const getSubject= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const {code}=req.params

        result=await connection.query("SELECT * FROM subject WHERE code= ?", code)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getSubject}