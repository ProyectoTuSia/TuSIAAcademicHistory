import {getConnection} from "../database/database"

const getAllSubjects= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        result=await connection.query("SELECT * FROM subject")
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getAllSubjects}