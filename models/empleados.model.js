const mongoose=require("mongoose");


const Empleados=mongoose.Schema({
    id_empleados:{
        type:String,
        unique:true
    },
    nombre: String,
    apellidos: String,
    fechana: Date,
    sexo: String,
    telefono: Number,
    email: String,
    created_at:Date
})

module.exports=mongoose.model("Empleado", Empleados);