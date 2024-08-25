const fs = require("fs");

const registrar = (nombre, edad, tipoAnimal, colorAnimal, enfermedad) => {
  const infoAnimal = {
    Nombre: nombre,
    Edad: edad,
    Tipo: tipoAnimal,
    Color: colorAnimal,
    Enfermedad: enfermedad
  };
  const contenido = JSON.parse(fs.readFileSync("citas.json", "utf8"))
  contenido.push(infoAnimal);
  fs.writeFileSync("citas.json", JSON.stringify(contenido))
};

const leer = () => {

  const info = JSON.parse(fs.readFileSync("citas.json", "Utf8"))
  console.log(info)
};

module.exports = { registrar, leer };
