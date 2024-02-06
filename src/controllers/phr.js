import { http } from "../config/http.js";
import { getPatient } from "../services/phr.js";
import { AllergyIntoleranceOpject } from "../models/allergyIntolerance.js";

const sendData = async () => {
  try {
    console.log(AllergyIntoleranceOpject)
  } catch (error) {
    console.error(error.message);
  }
};

export { sendData };
