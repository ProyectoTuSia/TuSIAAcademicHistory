import {getConnection} from "../database/database"

const updateStudentCreditsPending= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const approvedResult= await connection.query("SELECT * FROM student_credits_approved WHERE id_story=?", id)
        const careerResult= await connection.query("SELECT * FROM career_credits WHERE code in (select career_code from story where id=?);", id)

        console.log(approvedResult)
        console.log(careerResult)

        let newPending={}

        newPending.fundamentacion_obligatoria_pending=careerResult[0].fundamentacion_obligatoria - approvedResult[0].fundamentacion_obligatoria_approved
        newPending.fundamentacion_optativa_pending=careerResult[0].fundamentacion_optativa - approvedResult[0].fundamentacion_optativa_approved
        newPending.disciplinar_optativa_pending=careerResult[0].disciplinar_optativa - approvedResult[0].disciplinar_optativa_approved
        newPending.disciplinar_obligatoria_pending=careerResult[0].disciplinar_obligatoria - approvedResult[0].disciplinar_obligatoria_approved
        newPending.libre_eleccion_pending=careerResult[0].libre_eleccion - approvedResult[0].libre_eleccion_approved
        newPending.nivelacion_pending=careerResult[0].nivelacion - approvedResult[0].nivelacion_approved
        newPending.trabajo_de_grado_pending=careerResult[0].trabajo_de_grado - approvedResult[0].trabajo_de_grado_approved
        newPending.total_pending=careerResult[0].total - approvedResult[0].total_approved

        if (newPending.fundamentacion_obligatoria_pending<0){
            newPending.fundamentacion_obligatoria_pending=0
        }
        if (newPending.fundamentacion_optativa_pending<0){
            newPending.fundamentacion_optativa_pending=0
        }
        if (newPending.disciplinar_obligatoria_pending<0){
            newPending.disciplinar_obligatoria_pending=0
        }
        if (newPending.disciplinar_optativa_pending<0){
            newPending.disciplinar_optativa_pending=0
        }
        if (newPending.libre_eleccion_pending<0){
            newPending.libre_eleccion_pending=0
        }
        if (newPending.trabajo_de_grado_pending<0){
            newPending.trabajo_de_grado_pending=0
        }
        if (newPending.nivelacion_pending<0){
            newPending.nivelacion_pending=0
        }
        if (newPending.total_pending<0){
            newPending.total_pending=0
        }

        console.log(newPending)
        
        result=await connection.query("UPDATE student_credits_pending SET ? WHERE id_story= ?",[newPending, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateStudentCreditsPending}