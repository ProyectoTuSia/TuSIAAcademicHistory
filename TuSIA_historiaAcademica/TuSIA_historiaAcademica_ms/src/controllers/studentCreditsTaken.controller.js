import {updateStudentCreditsTaken} from "../models/updateStudentCreditsTaken"
import {updateStudentCreditsApproved} from "../models/updateStudentCreditsApproved"
import {updateStudentCreditsPending} from "../models/updateStudentCreditsPending"
import {updateCreditSummary} from "../models/updateCreditSummary"
import {updateTo0StudentCreditsSigned} from "../models/updateTo0StudentCreditsSigned"

const updateStudentCreditsTakenController= async(req,res)=>{

    try {
        const result = await updateStudentCreditsTaken(req)
        const resultApproved = await updateStudentCreditsApproved(req)
        const resultSigned= await updateTo0StudentCreditsSigned(req)
        const resultPending = await updateStudentCreditsPending(req)
        const resultSummary = await updateCreditSummary(req)
        res.json(resultSummary)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const methods={
    updateStudentCreditsTakenController
}