import {getConnection} from "../database/database"

const newStudentCreditsPending= async (data) =>{
    const connection= await getConnection()
    let result
    try{
        result=await connection.query(`INSERT INTO student_credits_pending values('${data.id_story}','${data.fundamentacion_optativa}',
        '${data.fundamentacion_obligatoria}','${data.disciplinar_optativa}','${data.disciplinar_obligatoria}','${data.nivelacion}','${data.trabajo_de_grado}',
        '${data.libre_eleccion}','${data.total}');`)

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {newStudentCreditsPending}