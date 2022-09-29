import {getStudentSubjects} from "../models/getStudentSubjects"
import {newStudentSubject} from "../models/newStudentSubject"

const getStudentSubjectsController= async (req,res)=>{
    try {
        const result= await getStudentSubjects(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const newStudentSubjectController= async (req, res)=>{
    try {
        const result= await newStudentSubject(req)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methods={
    getStudentSubjectsController,
    newStudentSubjectController
}
