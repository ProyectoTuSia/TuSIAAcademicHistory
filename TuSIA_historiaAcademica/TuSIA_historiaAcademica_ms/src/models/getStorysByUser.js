import {getConnection} from "../database/database"

const getStorysByUser= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const  username=req.body.username

        console.log(username)

        result=await connection.query(`Select * from story where username='${username}';`)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getStorysByUser}