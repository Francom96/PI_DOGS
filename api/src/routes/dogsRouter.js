const { Router } = require('express');

  const  {getAllDogsHandler,
    getByIdHandler,
    // getByNameDogsHandler,
    postDogHandler} = require ("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.use("/createDog",postDogHandler);
dogsRouter.use("/:idRaza",getByIdHandler);
dogsRouter.use("/",getAllDogsHandler);
// dogsRouter.use("/name",getByNameDogsHandler);

module.exports = dogsRouter;