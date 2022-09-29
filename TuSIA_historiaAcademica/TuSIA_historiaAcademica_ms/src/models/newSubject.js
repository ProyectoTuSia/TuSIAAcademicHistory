import {getConnection} from "../database/database"

const newSubject= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const{code, name, credits}=req.body
        const subject={code, name, credits}

        result=await connection.query("INSERT INTO subject set ?",subject)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {newSubject}