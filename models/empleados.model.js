const mongoose=require("mongoose");


const Empleados=mongoose.Schema({
    id_empleados:{
        type:String,
        unique:true
    },
    nombre: String,
    apellidos: String,
    fechana: Date,
    genero: String,
    telefono: Number,
    created_at:Date
})

module.exports=mongoose.model("Empleado", Empleados);