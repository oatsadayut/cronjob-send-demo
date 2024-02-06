import { http } from "../config/http.js";
import { getAllergyIntolerance } from "../services/phrService.js";

const sendAllergyIntolerance = async () => {
  try {
    const data = await getAllergyIntolerance()
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

export { sendAllergyIntolerance };
