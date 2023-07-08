const { Temperament } = require("../db");
const { getAllDogs } = require("./dogscontrollers");

const getAllTemperaments = async () => {
  let allTemperaments = [];
  const apiInfo = await getAllDogs();

  let allTemp = apiInfo.map((dog) => dog.temperament).join(", ").split(", ");

  allTemp.forEach((el) => {
    if (!allTemperaments.includes(el)) allTemperaments.push(el);
  });

  allTemperaments.sort();

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

module.exports = {getAllTemperaments};