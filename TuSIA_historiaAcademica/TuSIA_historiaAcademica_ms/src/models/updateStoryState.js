import {getConnection} from "../database/database"

const updateStoryState= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const state=req.body.state
        result=await connection.query("UPDATE story SET state=? WHERE id= ?",[state, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateStoryState}