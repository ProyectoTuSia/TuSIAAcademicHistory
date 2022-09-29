import {getConnection} from "../database/database"

const newCreditSummary= async (id_story, creditQuota) =>{
    const connection= await getConnection()
    let result
    try{
        console.log(creditQuota)
        result=await connection.query(`INSERT INTO credit_summary (id_story, credit_quota) values('${id_story}','${creditQuota}');`)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {newCreditSummary}