import mysql from "promise-mysql"
import config from "./../config"

//este es db local y ms docker
/*const connection=mysql.createConnection({
    host:"192.168.0.3",
    database:"TuSIA_historiaAcademica_db",
    user:"root",
    password:"Arisan.0823",
    port:3306
})*/

//este es el de doble docker
const connection=mysql.createConnection({
    host:process.env.IP_DB,
    database:"TuSIA_historiaAcademica_db",
    user:"sarodriguezca",
    password:"aaaaa55555",
    port:3306
})

//este es todo local
/*
const connection=mysql.createConnection({
    host:"localhost",
    database:"TuSIA_historiaAcademica_db",
    user:"root",
    password:"Arisan.0823",
})*/

const getConnection=()=>{
    return connection
}

module.exports={
    getConnection
}