import { http } from "../config/http.js";
import { getPatientData } from "../services/phrService.js";

const sendPatientData = async () => {
  try {
    const patient = await getPatientData();

    const payload = {
      code: "00000",
      name: "โรงพยาบาลทดสอบ",
      patient: patient,
    };

    const res = await http.post("{* api path *}", payload);
    const result = res.data;
  
    // Check response code status
    // if(res.status === 200){
    //    ... Do summing
    // }

    console.log(result);

  } catch (error) {
    console.error(error.message);
  }
};

export { sendPatientData };
