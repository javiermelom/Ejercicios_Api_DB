import { Router } from "express";
const router = Router();


router.get("/api/", function (req, res) {
  res.status(200).json({ Mensaje: "Hola Mundo" });
});



router.get("/api/suma/:num1/:num2", function (req, res) {
  let numero1 = parseInt(req.params.num1);
  let numero2 = parseInt(req.params.num2);
  let suma = numero1 + numero2;
  res.status(200).json({ Resultado: `${suma}` });
});



router.get("/api/usuario/:nombre", function (req, res) {
  const name = req.params.nombre;
  res.status(200).json({ Usuario: `${name}` });
});



router.get("/api/swapi/:numPersonaje", async function (req, res) {
  let numPersonaje = parseInt(req.params.numPersonaje);
  let consApi = await fetch(`https://swapi.dev/api/people/${numPersonaje}`);
  let result = await consApi.json();
  console.log(result);
  res.status(200).json({ personaje: result });
});



router.put("/api/body", function (req, res) {
  /*let { nombre, ocupacion } = req.body;
  let respuesta = {
    nombre: `${nombre}`,
    ocupacion: `${ocupacion}`,
  };*/
  res.status(200).json(req.body);
});



router.post("/api/suma", function (req, res) {
  let { num1, num2 } = req.body;
  if (!num1 || !num2) {
    res.status(400).json("Numeros erroneos");
    return;
  }
  let suma = parseInt(num1) + parseInt(num2);
  res.status(200).json({ Resultado: `${suma}` });
});

router.delete("/api/borrar/:id", function (req, res) {
  let id = parseInt(req.params.id);
  let contieneTres = false;

  if (id === 3) {
    contieneTres = true;
  }

  if (contieneTres) {
    // console.log("El dato contiene el número 3.");
    res.status(200).json("Se ha eliminado el objeto con ID 3");
  } else {
    // console.log("El dato NO contiene el número 3.");
    res.status(404).json("No se encontró el objeto con el ID especificado");
  }
});

export default router;
