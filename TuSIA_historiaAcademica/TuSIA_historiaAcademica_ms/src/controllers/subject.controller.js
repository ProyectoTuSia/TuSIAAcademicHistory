import {getSubject} from "../models/getSubject"
import {getAllSubjects} from "../models/getAllSubjects"
import {newSubject} from "../models/newSubject"
import {updateSubject} from "../models/updateSubject"
import {deleteSubject} from "../models/deleteSubject"

const getSubjectController= async(req,res)=>{
    try {
        const result= await getSubject(req)
        res.json(result)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const getAllSubjectsController= async(req,res)=>{
    try {
        const result= await getAllSubjects(req)
        res.json(result)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const newSubjectController= async(req,res)=>{
    try {
        const result= await newSubject(req)
        res.json(result)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const updateSubjectController= async(req,res)=>{
    try {
        const result= await updateSubject(req)
        res.json(result)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
const deleteSubjectController= async(req,res)=>{
    try {
        const result= await deleteSubject(req)
        res.json(result)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methods={
    getSubjectController,
    getAllSubjectsController,
    updateSubjectController,
    deleteSubjectController,
    newSubjectController
}