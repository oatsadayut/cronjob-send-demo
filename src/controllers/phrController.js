import { http } from "../config/http.js";
import { getAllergyIntolerance } from "../services/phrService.js";
import { AllergyIntoleranceOpject } from "../models/allergyIntolerance.js";

const sendAllergyIntolerance = async () => {
  try {
    console.log(getAllergyIntolerance());
  } catch (error) {
    console.error(error.message);
  }
};

export { sendAllergyIntolerance };
