const { Router } = require('express');

  const  {getAllDogsHandler,
    getByIdDogsHandler,
    getByNameDogsHandler,
    postDogsHandler} = require ("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.use("/",getAllDogsHandler);
dogsRouter.use("/:idRaza",getByIdDogsHandler);
dogsRouter.use("/name?=name",getByNameDogsHandler);
dogsRouter.use("/createDog",postDogsHandler);

module.exports = dogsRouter;