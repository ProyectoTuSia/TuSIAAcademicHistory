import {updateStudentCreditsSigned} from "../models/updateStudentCreditsSigned"
import {updateCreditSummary} from "../models/updateCreditSummary"


const updateStudentCreditsSignedController= async(req,res)=>{

    try {
        const result = await updateStudentCreditsSigned(req)
        const resultSummary= await updateCreditSummary(req)
        res.json(resultSummary)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const methods={
    updateStudentCreditsSignedController
}