let {listarTareas, agregarTarea, borrarTarea, tareasEstado} = require('./funciones/funcionesDeTareas');  

let arreglo_objs_literal = require('./servicios/tareas.json');


let nuevaTarea =    
{
    "codigo": 18,
    "titulo": "Realizar esquema",
    "estado": "Pendiente" 
};


agregarTarea(arreglo_objs_literal,nuevaTarea); 


//arreglo_objs_literal = borrarTarea(arreglo_objs_literal,18);

//listarTareas(arreglo_objs_literal);

//let tareas_pendientes= tareasEstado(arreglo_objs_literal,"Pendiente");
//console.log(tareas_pendientes);

console.log(arreglo_objs_literal)

