const express=require("express");
const AlumnosController= require("../controller/alumnos.controller");

const api=express.Router();

api.post("/alumno",AlumnosController.createAlumnos);
api.get("/alumno",AlumnosController.getAlumno);
api.delete("/alumno/:id",AlumnosController.deleteAlumno);
api.put("/alumnos",AlumnosController.updateAlumnos);

module.exports=api;