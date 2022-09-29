import {config} from "dotenv"
import { process_params } from "express/lib/router"

config()

export default{
    host:process.env.HOST || "",
    database:process.env.DATABASE || "",
    user:process.env.USER || "",
    password:process.env.PASSWORD || "",
    password:process.env.PORT ||""
}
