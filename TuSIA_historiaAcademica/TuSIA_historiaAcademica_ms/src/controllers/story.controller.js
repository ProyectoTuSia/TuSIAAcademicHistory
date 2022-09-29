import {getStory} from "../models/getStory"
import {newStory} from "../models/newStory"
import {getCareerCredits} from "../models/getCareerCredits"
import {newStudentCreditsPending} from "../models/newStudentCreditsPending"
import {newStudentCreditsApproved} from "../models/newStudentCreditsApproved"
import {newStudentCreditsSigned} from "../models/newStudentCreditsSigned"
import {newStudentCreditsTaken} from "../models/newStudentCreditsTaken"
import {newAverages} from "../models/newAverages"
import {newCreditSummary} from "../models/newCreditSummary"
import {updateStoryState} from "../models/updateStoryState"

const getStoryController= async(req,res)=>{

    try {
        const result = await getStory(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
const newStoryController= async(req,res)=>{

    try {
        const newID = await newStory(req)
        let selectResult= await getCareerCredits(req)
        selectResult[0].code=newID
        let creditsObj=selectResult[0]
        creditsObj['id_story'] = creditsObj['code'];
        delete creditsObj['code'];
        let resultPending= await newStudentCreditsPending(creditsObj)
        let resultApproved= await newStudentCreditsApproved(newID)
        let resultSigned= await newStudentCreditsSigned(newID)
        let resultTaken= await newStudentCreditsTaken(newID)
        let resultAverages= await newAverages(newID)
        let resultSummary= await newCreditSummary(newID,creditsObj.total)
        res.json(resultTaken)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

const updateStoryStateController=async(req,res)=>{
    try {
        const result=await updateStoryState(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methods={
    getStoryController,
    newStoryController,
    updateStoryStateController
}