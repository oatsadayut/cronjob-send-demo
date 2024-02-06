import { http } from "../config/http.js";
import { getPatient } from "../services/phrService.js";
import { AllergyIntoleranceOpject } from "../models/allergyIntolerance.js";

const sendAllergyIntolerance = async () => {
  try {
    console.log(AllergyIntoleranceOpject)
  } catch (error) {
    console.error(error.message);
  }
};

export { sendAllergyIntolerance };
