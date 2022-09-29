import {getConnection} from "../database/database"

const updateTo0StudentCreditsSigned= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        
        result=await connection.query("UPDATE student_credits_signed SET fundamentacion_obligatoria_signed=0, fundamentacion_optativa_signed=0, disciplinar_obligatoria_signed=0, disciplinar_optativa_signed=0, libre_eleccion_signed=0, nivelacion_signed=0, trabajo_de_grado_signed=0, total_signed=0  WHERE id_story= ?",id)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateTo0StudentCreditsSigned}