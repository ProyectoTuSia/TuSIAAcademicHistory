import {getConnection} from "../database/database"

const updateCreditSummary= async (req) =>{
    const connection= await getConnection()
    let result
    try{
        const {id}=req.params
        const approvedResult= await connection.query("SELECT * FROM student_credits_approved WHERE id_story=?", id)
        const pendingResult= await connection.query("SELECT * FROM student_credits_pending WHERE id_story=?", id)
        const takenResult= await connection.query("SELECT * FROM student_credits_taken WHERE id_story=?", id)
        const signedResult= await connection.query("SELECT * FROM student_credits_signed WHERE id_story=?", id)
        const careerResult= await connection.query("SELECT * FROM career_credits WHERE code in (select career_code from story where id=?);", id)

        console.log(approvedResult)
        console.log(careerResult)

        //surplus
        let fundamentacion_obligatoria_surplus

        if (approvedResult[0].fundamentacion_obligatoria_approved < careerResult[0].fundamentacion_obligatoria){
            fundamentacion_obligatoria_surplus=0
        }
        else{
            fundamentacion_obligatoria_surplus=approvedResult[0].fundamentacion_obligatoria_approved-careerResult[0].fundamentacion_obligatoria
        }

        let fundamentacion_optativa_surplus

        if (approvedResult[0].fundamentacion_optativa_approved < careerResult[0].fundamentacion_optativa){
            fundamentacion_optativa_surplus=0
        }
        else{
            fundamentacion_optativa_surplus=approvedResult[0].fundamentacion_optativa_approved-careerResult[0].fundamentacion_optativa
        }

        let fundamentacion_surplus=fundamentacion_optativa_surplus+fundamentacion_obligatoria_surplus

        let disciplinar_obligatoria_surplus

        if (approvedResult[0].disciplinar_obligatoria_approved < careerResult[0].disciplinar_obligatoria){
            disciplinar_obligatoria_surplus=0
        }
        else{
            disciplinar_obligatoria_surplus=approvedResult[0].disciplinar_obligatoria_approved-careerResult[0].disciplinar_obligatoria
        }

        let disciplinar_optativa_surplus

        if (approvedResult[0].disciplinar_optativa_approved < careerResult[0].disciplinar_optativa){
            disciplinar_optativa_surplus=0
        }
        else{
            disciplinar_optativa_surplus=approvedResult[0].disciplinar_optativa_approved-careerResult[0].disciplinar_optativa
        }

        let disciplinar_surplus=disciplinar_optativa_surplus+disciplinar_obligatoria_surplus

        let surplus=fundamentacion_surplus+disciplinar_surplus

        //percentage
        let percentage=(1-((pendingResult[0].total_pending-pendingResult[0].nivelacion_pending)/(careerResult[0].total-careerResult[0].nivelacion)))*100
        percentage=percentage.toFixed(1)

        //aditional
        let maxAditional=80

        if (careerResult[0].total-careerResult[0].nivelacion<160){
            maxAditional=Math.floor((careerResult[0].total-careerResult[0].nivelacion)/2)
        }

        let aditional=approvedResult[0].total_approved*2
        if (aditional>maxAditional){
            aditional=maxAditional
        }

        //quota

        let quota=careerResult[0].total-takenResult[0].total_taken-signedResult[0].total_signed+aditional

        //available

        let available=quota-pendingResult[0].total_pending

        const newSummary={}

        newSummary.surplus_credits=surplus
        newSummary.completion_percentage=percentage
        newSummary.aditional_credits=aditional
        newSummary.credit_quota=quota
        newSummary.available_credits=available

        console.log(newSummary)
        
        result=await connection.query("UPDATE credit_summary SET ? WHERE id_story= ?",[newSummary, id])

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    return result
    
}

module.exports = {updateCreditSummary}