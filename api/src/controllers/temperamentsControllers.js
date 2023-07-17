const { Temperament } = require("../db");
// const { getAllDogs } = require("./dogscontrollers");
const axios = require("axios");

const getAllTemperaments = async () => {
  const allTemperaments = [];
  const alldogsAPI = (
    await axios("https://api.thedogapi.com/v1/breeds/?limit=100")
  ).data;
  const arrTempsAPI = alldogsAPI
    .map((dog) => dog.temperament)
    .join(", ")
    .split(", ");
  arrTempsAPI.forEach((temp) => {
    if (!allTemperaments.includes(temp)) allTemperaments.push(temp);
  });
  
  allTemperaments.sort();
  // return allTemperaments;
  await Promise.all(
    allTemperaments.map((temperament) => {
      Temperament.findOrCreate({
        where: { name: temperament },
        defaults: { name: temperament },
      });
    })
  );

  const allTemperamentsDb = await Temperament.findAll();

  return allTemperamentsDb;

};
module.exports= {getAllTemperaments};