import {getCreditHistory} from "../models/getCreditHistory"

const getCreditHistoryController = async(req,res)=>{

    try {
        const result= await getCreditHistory(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const methods={
    getCreditHistoryController
}