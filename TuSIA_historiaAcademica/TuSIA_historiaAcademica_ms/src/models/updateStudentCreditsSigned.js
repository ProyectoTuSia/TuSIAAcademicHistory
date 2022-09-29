import {getConnection} from "../database/database"

const updateStudentCreditsSigned= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const{fundamentacion_obligatoria_signed,fundamentacion_optativa_signed,disciplinar_obligatoria_signed,disciplinar_optativa_signed,libre_eleccion_signed,nivelacion_signed,trabajo_de_grado_signed,total_signed}=req.body
        const signed_credits={fundamentacion_obligatoria_signed,fundamentacion_optativa_signed,disciplinar_obligatoria_signed,disciplinar_optativa_signed,libre_eleccion_signed,nivelacion_signed,trabajo_de_grado_signed,total_signed}
        console.log(signed_credits)
        result=await connection.query("UPDATE student_credits_signed SET ? WHERE id_story= ?",[signed_credits, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateStudentCreditsSigned}