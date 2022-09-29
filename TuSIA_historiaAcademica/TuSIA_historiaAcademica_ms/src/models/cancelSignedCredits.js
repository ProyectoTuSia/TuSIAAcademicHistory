import {getConnection} from "../database/database"

const cancelSignedCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const{fundamentacion_obligatoria,fundamentacion_optativa,disciplinar_obligatoria,disciplinar_optativa,libre_eleccion,nivelacion,trabajo_de_grado,total}=req.body
        const data={fundamentacion_obligatoria,fundamentacion_optativa,disciplinar_obligatoria,disciplinar_optativa,libre_eleccion,nivelacion,trabajo_de_grado,total}
        
        result=await connection.query(`UPDATE student_credits_signed SET fundamentacion_optativa_signed=fundamentacion_optativa_signed -'${data.fundamentacion_optativa}', fundamentacion_obligatoria_signed=fundamentacion_obligatoria_signed-'${data.fundamentacion_obligatoria}', disciplinar_optativa_signed= disciplinar_optativa_signed-'${data.disciplinar_optativa}',disciplinar_obligatoria_signed=disciplinar_obligatoria_signed-'${data.disciplinar_obligatoria}', nivelacion_signed=nivelacion_signed-'${data.nivelacion}',trabajo_de_grado_signed=trabajo_de_grado_signed-'${data.trabajo_de_grado}',libre_eleccion_signed=libre_eleccion_signed-'${data.libre_eleccion}', total_signed=total_signed-'${data.total}' where id_story=${id};`)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {cancelSignedCredits}