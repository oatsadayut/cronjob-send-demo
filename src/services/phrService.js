import knex from "../config/database.js";

const getPatient = async () => {
  const data = await knex.raw("SELECT * FROM ... limit 10").debug(false);
  const result = data[0];
  return result;
};

export { getPatient };
