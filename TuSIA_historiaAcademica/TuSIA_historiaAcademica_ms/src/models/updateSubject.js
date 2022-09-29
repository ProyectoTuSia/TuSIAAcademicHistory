import {getConnection} from "../database/database"

const updateSubject= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {code}=req.params
        const{name, credits}=req.body
        const subject={name, credits}

        result=await connection.query("UPDATE subject SET ? WHERE code= ?",[subject, code])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateSubject}