import { response } from "express"
import {getConnection} from "../database/database"

const newStory= async (req) =>{
    const connection= await getConnection()
    let results
    let newID
    try{
        const{username,faculty,career_code,career_name,state}=req.body
        const story={username,faculty,career_code,career_name,state}

        results=await connection.query("INSERT INTO story SET ?",story)
        newID=await connection.query("SELECT LAST_INSERT_ID()")
        newID=newID[0]
        newID['LAST_INSERT_ID'] = newID['LAST_INSERT_ID()'];
        delete newID['LAST_INSERT_ID()'];

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    
    return newID.LAST_INSERT_ID
}

module.exports = {newStory}