const axios = require("axios");
const { API_KEY } = process.env;
// const {dogs} = require ("../db")

const getAllDogs = async () => {
const allDogs = (
    await axios.get ("https://api.thedogapi.com/v1/breeds/?limit=100")).data;
    return allDogs;
}


const getByIdDogs= async (source, id) => {
 if (source === "api") {
    const dogsapi = (
        await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data;
        return dogsapi
    }
 
}


const getByNameDogs= async (name) => {
const dogsapi = (
    await axios.get("https://api.thedogapi.com/v1/breeds/?limit=100")).data;
 const filter = dogsapi?.filter((dog) => dog.name.toLowerCase().includes.name.toLowerCase()); 
 return  filter;
}


const postDogs = async () => {

}



module.exports={
    getAllDogs,
    getByIdDogs,
    getByNameDogs,
    postDogs
};