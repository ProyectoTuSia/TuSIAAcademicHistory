import {getConnection} from "../database/database"

const updateAverages= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const{PAPA,PA,PAPPI}=req.body
        const average={PAPA,PA,PAPPI}

        result=await connection.query("UPDATE averages SET ? WHERE id_story= ?",[average, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateAverages}