import {getConnection} from "../database/database"

const getStoryByUserAndCareer= async (req) =>{
    const connection= await getConnection()
    let result
    try{
    
        const  username=req.body.username
        const  career=req.body.career
        console.log(career)

        result=await connection.query(`Select * from story where username='${username}' and career_code=${career};`)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {getStoryByUserAndCareer}