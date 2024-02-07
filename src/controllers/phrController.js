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
    console.log(payload);

  } catch (error) {
    console.error(error.message);
  }
};

export { sendPatientData };
