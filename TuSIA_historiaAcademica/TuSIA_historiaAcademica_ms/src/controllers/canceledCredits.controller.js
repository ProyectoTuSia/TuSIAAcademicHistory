import {cancelSignedCredits} from "../models/cancelSignedCredits"
import {updateCanceledCredits} from "../models/updateCanceledCredits"
import {updateCreditSummary} from "../models/updateCreditSummary"


const creditLossController=async(req,res)=>{
    try {
        console.log("controller")
        const result = await cancelSignedCredits(req)
        const resultSum = await updateCanceledCredits(req)
        res.json(resultSum)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const noCreditLossController=async(req,res)=>{
    try {
        console.log("controller")
        const result = await cancelSignedCredits(req)
        const resultSummary= await updateCreditSummary(req)
        res.json(resultSummary)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const methods={
    creditLossController,
    noCreditLossController
}