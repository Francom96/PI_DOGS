const {
    getAllDogs,
    getByIdDogs,
    getByNameDogs,
    postDogs
} = require("../controllers/dogscontrollers");


const getAllDogsHandler = async (req,res) => {
    try {
         const allDogs = await getAllDogs();
         res.status(200).json(allDogs);
    } catch (error) {
        res.status(400).json({message : "No se encontraron los perros"})
    }
};


const getByIdDogsHandler = async (req,res) => {
    const id = req.params.id;
    const source = isNaN(id) ? "db" : "api"; // PUEDE QUE SE DECLARE CON LET!!!!!!!!!!!!!!!!!!!!!!!!

    try {
        const byIdDogs = await getByIdDogs(source,id);
        res.status(200).json(byIdDogs);
    } catch (error) {
        res.status(400)({message: "No se encontro Id"});
    }
};



const getByNameDogsHandler= async (req,res) => {
    const name = req.query.name;
    
    try {
        const ByNameDogs = await getByNameDogs(name);
        res.status(200).json(ByNameDogs);
   } catch (error) {
       res.status (400).json({message : "No se encontro un perro con ese nombre"})
   }
};


const postDogsHandler= async (req,res) => {
    const {name,minHeight, maxHeight, minWeight, maxWeigth,lifeSpan} = req.body;

    try {
        const createDogs = await postDogs(
            name,
            minHeight,
            maxHeight,
            minWeight,
            maxWeigth,
            lifeSpan
            );
            
        res.status(200).json(ByNameDogs);
   } catch (error) {
       res.status (400).json({message : "No se pudo crear"})
   }
};





module.exports={
    getAllDogsHandler,
    getByIdDogsHandler,
    getByNameDogsHandler,
    postDogsHandler
};