const Empleados=require("../models/empleados.model");

 function createEmpleados(req,res){
    const empleados=new Empleados(req.body);
   
    empleados.save((error, empleadoStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(empleadoStored)
        }
    })
}

function getEmpleados(req,res){
    Empleados.find((error, empleadosStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(empleadosStored)
        }
    })
}

 function deleteEmpleado(req,res){
    const {id}=req.params;

    Empleados.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el empleado"})
        }else{
            res.status(200).send({msg: "Empleado eliminado"})
        }
    })
}

function updateEmpleados(req,res){
   const {id}=req.params;
   const datosEmpleado=req.body;

   Empleados.findByIdAndUpdate({_id:id},datosEmpleado, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getEmpleado(req,res){
    console.log("Obtener los empleados");
}



module.exports={
    createEmpleados,
    updateEmpleados,
    deleteEmpleado,
    getEmpleado,
    getEmpleados
}