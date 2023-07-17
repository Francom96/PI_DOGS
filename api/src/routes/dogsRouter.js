const { Router } = require('express');

  const  {getAllDogsHandler,
    getByIdHandler,
    // getByNameDogsHandler,
    postDogHandler} = require ("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.use("/:idRaza",getByIdHandler);
dogsRouter.use("/",getAllDogsHandler);
// dogsRouter.use("/name",getByNameDogsHandler);
dogsRouter.use("/createDog",postDogHandler);

module.exports = dogsRouter;