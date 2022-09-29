import {getCareerCredits} from "../models/getCareerCredits"
import {getAllCareerCredits} from "../models/getAllCareerCredits"
import {newCareerCredits} from "../models/newCareerCredits"
import {deleteCareerCredits} from "../models/deleteCareerCredits"
import {updateCareerCredits} from "../models/updateCareerCredits"

const getCareerCreditsController= async(req,res)=>{

    try{     
        const result= await getCareerCredits(req)
        res.json(result)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

const getAllCareerCreditsController= async(req,res)=>{

    try{     
        const result= await getAllCareerCredits(req)
        res.json(result)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

const newCareerCreditsController= async(req,res)=>{

    try{
        const result=await newCareerCredits(req)
        res.json(result)
    }
    catch(error){
        res.status(500)
        res.send(error.message)

    }
}

const deleteCareerCreditsController= async(req,res)=>{

    try{
        const result=await deleteCareerCredits(req)
        res.json(result)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

const updateCareerCreditsController= async(req,res)=>{

    try{
        const result= await updateCareerCredits(req)
        res.json(result)
    }
    catch(error){
        res.status(500)
        res.send(error.message)

    }
}

export const methods={
    getCareerCreditsController,
    getAllCareerCreditsController,
    updateCareerCreditsController,
    deleteCareerCreditsController,
    newCareerCreditsController
}