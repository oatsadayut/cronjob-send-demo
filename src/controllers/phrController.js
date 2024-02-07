import { http } from "../config/http.js";
import { getPatient, getAllergy } from "../services/phrService.js";

const sendPatientData = async () => {
  try {
    const patient = await getPatient();
    const allergy = await getAllergy();

    const payload = {
      patient: patient,
      allergy: allergy,
    };

    const res = await http.post("{* api path *}", payload);
    const result = res.data;
    console.log(result);

  } catch (error) {
    console.error(error.message);
  }
};

export { sendPatientData };
