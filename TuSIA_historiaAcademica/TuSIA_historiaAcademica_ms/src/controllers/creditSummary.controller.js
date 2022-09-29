import {getCreditSummary} from "../models/getCreditSummary"

const getCreditSummaryController =async(req,res)=>{
    try {
        const result = await getCreditSummary(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methods={
    getCreditSummaryController
}