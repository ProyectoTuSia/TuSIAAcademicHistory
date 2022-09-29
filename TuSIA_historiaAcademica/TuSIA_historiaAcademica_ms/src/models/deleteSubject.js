import {getConnection} from "../database/database"

const deleteSubject= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const {code}=req.params

        result=await connection.query("DELETE FROM subject WHERE code= ?", code)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {deleteSubject}