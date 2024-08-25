
const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, tipoAnimal, colorAnimal, enfermedad] = process.argv.slice(2);

if( operacion === "registrar"){
  registrar(nombre, edad, tipoAnimal, colorAnimal, enfermedad)
  console.log("Datos ingresados Correctamente")
}else if (operacion === "leer") {
  leer();
} else {
  console.log("Ingrese datos de esta manera 'node index registrar nombre edad tipo color dolencia' para registrar un animal o")
  console.log("Para ver los registros ingrese 'node index leer'")
}

