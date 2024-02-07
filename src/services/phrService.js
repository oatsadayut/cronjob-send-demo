import knex from "../config/database.js";

const getPatient = async () => {
  //Mock data
  let mockData = {
    cid: "0000000000000",
    fullname: "นายทดสอบ ใจดี",
  };

  return mockData;
};

const getAllergy = async () => {
  //Mock data
  let mockData = [
    { name: "พารา", group: "ยาแก้ปวด", type: "drug" },
    { name: "แอนตาซีน", group: "ยาแก้ปวด", type: "drug" },
    { name: "หูฉลาม", group: "อาหาร", type: "food" },
  ];
  return mockData;
};

export { getAllergy, getPatient };
