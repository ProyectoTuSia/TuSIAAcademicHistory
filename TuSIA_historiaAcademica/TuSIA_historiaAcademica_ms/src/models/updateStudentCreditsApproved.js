import {getConnection} from "../database/database"

const updateStudentCreditsApproved= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const selectResult= await connection.query("SELECT * FROM student_credits_approved WHERE id_story=?", id)

        const newApproved={}

        newApproved.fundamentacion_obligatoria_approved=selectResult[0].fundamentacion_obligatoria_approved + req.body.fundamentacion_obligatoria_approved
        newApproved.fundamentacion_optativa_approved=selectResult[0].fundamentacion_optativa_approved + req.body.fundamentacion_optativa_approved
        newApproved.disciplinar_optativa_approved=selectResult[0].disciplinar_optativa_approved + req.body.disciplinar_optativa_approved
        newApproved.disciplinar_obligatoria_approved=selectResult[0].disciplinar_obligatoria_approved + req.body.disciplinar_obligatoria_approved
        newApproved.libre_eleccion_approved=selectResult[0].libre_eleccion_approved + req.body.libre_eleccion_approved
        newApproved.nivelacion_approved=selectResult[0].nivelacion_approved + req.body.nivelacion_approved
        newApproved.trabajo_de_grado_approved=selectResult[0].trabajo_de_grado_approved + req.body.trabajo_de_grado_approved
        newApproved.total_approved=selectResult[0].total_approved + req.body.total_approved

        
        result=await connection.query("UPDATE student_credits_approved SET ? WHERE id_story= ?",[newApproved, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateStudentCreditsApproved}