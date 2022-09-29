import {getConnection} from "../database/database"

const getStory= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const {id}=req.params

        result=await connection.query("SELECT * FROM story WHERE id= ?", id)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getStory}