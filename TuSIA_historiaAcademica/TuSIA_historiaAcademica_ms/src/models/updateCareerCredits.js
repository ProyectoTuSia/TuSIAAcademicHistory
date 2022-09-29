import {getConnection} from "../database/database"

const updateCareerCredits= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {code}=req.params
        const{fundamentacion_obligatoria,fundamentacion_optativa,disciplinar_obligatoria,disciplinar_optativa,libre_eleccion,nivelacion,trabajo_de_grado,total}=req.body
        const career_credit={fundamentacion_obligatoria,fundamentacion_optativa,disciplinar_obligatoria,disciplinar_optativa,libre_eleccion,nivelacion,trabajo_de_grado,total}

        result=await connection.query("UPDATE career_credits SET ? WHERE code= ?",[career_credit, code])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateCareerCredits}