import {getAverages} from "../models/getAverages"
import {updateAverages} from "../models/updateAverages"

const getAveragesController =async(req,res)=>{
    try {
        const result = await getAverages(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const updateAveragesController= async(req,res)=>{
    try {
        const result=await updateAverages(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const methods={
    getAveragesController,
    updateAveragesController
}