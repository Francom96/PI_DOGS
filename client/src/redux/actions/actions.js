import {
    GET_ALL_DOGS,
    GET_DOG_BY_ID,
    GET_DOG_BY_NAME,
    POST_DOG,
    GET_TEMPERAMENTS,
  } from "./actions.types";
  import axios from "axios";
  
  export const getAllDogs = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get("http://localhost:3001/dogs");
        dispatch({ type: GET_ALL_DOGS, payload: response.data });
      } catch (error) {
        alert("No se encontraron los perros");
      }
    };
  };
  
  export const getDogById = (id) => {
    console.log(id);
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        dispatch({ type: GET_DOG_BY_ID, payload: response.data });
      } catch (error) {
        alert("No se encontró un perro con ese id");
      }
    };
  };
  
  export const getDogByName = (name) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          `http://localhost:3001/dogs/?name=${name}`
        );
        dispatch({ type: GET_DOG_BY_NAME, payload: response.data });
      } catch (error) {
        alert("No se encontró un perro con ese nombre");
      }
    };
  };
  
  export const postDog = (form) => {
    console.log(form);
    return async function (dispatch) {
      try {
        const response = await axios.post(
          `http://localhost:3001/dogs/createDog`,
          form
        );
        dispatch({ type: POST_DOG, payload: response.data });
      } catch (error) {
        alert("No se puso crear el perruno");
      }
    };
  };
 
  export const getTemperaments = () => async (dispatch) => {
    try {
      await axios.get("http://localhost:3001/temperaments").then((response) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: response.data,
        });
      });
    } catch (error) {
      return error;
    }
  };