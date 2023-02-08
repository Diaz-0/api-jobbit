const Alumnos=require("../models/alumnos.model");

async function createAlumnos(req,res){
    const alumnos=new Alumnos(req.body);
   
    alumnos.save((error, alumnoStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(alumnoStored)
        }
    })
}

async function updateAlumnos(req,res){
    console.log("Actualización de alumnos");
}

async function deleteAlumno(req,res){
    console.log("Eliminar alumno");
}
async function getAlumno(req,res){
    console.log("Obtener los alumnos");
}

module.exports={
    createAlumnos,
    updateAlumnos,
    deleteAlumno,
    getAlumno
}