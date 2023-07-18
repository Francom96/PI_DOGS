const {
    getAllDogs,
    getByIdDogs,
    postDogs
} = require("../controllers/dogscontrollers");


const getAllDogsHandler = async (req, res) => {
    const name = req.query.name;
    try {
      let allDogs = await getAllDogs(name);
      res.status(200).json(allDogs);
    } catch (error) {
      res.status(400).json({ message: "No se encontraron los perrunos" });
    }
  };
  
  const getByIdHandler = async (req, res) => {
    const id = req.params.idRaza;
    console.log(id);
  
    try {
      let dogById = await getByIdDogs(id);
      res.status(200).json(dogById);
    } catch (error) {
      res.status(400).json({ message: "No se encontró un perro con ese id" });
    }
  };
  

  
  const postDogHandler = async (req, res) => {
    const { name, heightMin, heightMax, weightMin, weightMax, life_span } =
      req.body;
    console.log(req.body.minHeight);
    try {
      let dogCreated = await postDog(
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span
      );
      res.status(200).json(dogCreated);
    } catch (error) {
      res.status(400).json({ message: "No se pudo crear el perro" });
    }
  };
  
  module.exports = {
    getAllDogsHandler,
    getByIdHandler,
    postDogHandler,
  };