import {getConnection} from "../database/database"

const newCareerCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const{code,fundamentacion_obligatoria,fundamentacion_optativa,disciplinar_obligatoria,disciplinar_optativa,libre_eleccion,nivelacion,trabajo_de_grado,total}=req.body
        const career_credit={code,fundamentacion_obligatoria,fundamentacion_optativa,disciplinar_obligatoria,disciplinar_optativa,libre_eleccion,nivelacion,trabajo_de_grado,total}

        result=await connection.query("INSERT INTO career_credits set ?",career_credit)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {newCareerCredits}