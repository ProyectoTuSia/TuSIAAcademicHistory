import {getConnection} from "../database/database"

const updateStudentCreditsTaken= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const selectResult= await connection.query("SELECT * FROM student_credits_taken WHERE id_story=?", id)

        const newTaken={}

        newTaken.fundamentacion_obligatoria_taken=selectResult[0].fundamentacion_obligatoria_taken + req.body.fundamentacion_obligatoria_taken
        newTaken.fundamentacion_optativa_taken=selectResult[0].fundamentacion_optativa_taken + req.body.fundamentacion_optativa_taken
        newTaken.disciplinar_optativa_taken=selectResult[0].disciplinar_optativa_taken + req.body.disciplinar_optativa_taken
        newTaken.disciplinar_obligatoria_taken=selectResult[0].disciplinar_obligatoria_taken + req.body.disciplinar_obligatoria_taken
        newTaken.libre_eleccion_taken=selectResult[0].libre_eleccion_taken + req.body.libre_eleccion_taken
        newTaken.nivelacion_taken=selectResult[0].nivelacion_taken + req.body.nivelacion_taken
        newTaken.trabajo_de_grado_taken=selectResult[0].trabajo_de_grado_taken + req.body.trabajo_de_grado_taken
        newTaken.total_taken=selectResult[0].total_taken + req.body.total_taken
        
        result=await connection.query("UPDATE student_credits_taken SET ? WHERE id_story= ?",[newTaken, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateStudentCreditsTaken}