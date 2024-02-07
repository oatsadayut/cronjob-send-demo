import knex from "../config/database.js";

const getPatientData = async () => {
  //Mock data
  let mockData = [
    {
      cid: "0000000000000",
      fullname: "นายทดสอบ ใจดี",
      allergy: [
        { name: "พารา", group: "ยาแก้ปวด", type: "drug" },
        { name: "แอนตาซีน", group: "ยาแก้ปวด", type: "drug" },
        { name: "หูฉลาม", group: "อาหาร", type: "food" },
      ],
    },
    {
      cid: "3300000000001",
      fullname: "นายทดสอบ2 สุขสม",
      allergy: [
        { name: "แอนตาซีน", group: "ยาแก้ปวด", type: "drug" },
        { name: "หูฉลาม", group: "อาหาร", type: "food" },
      ],
    },
  ];
  return mockData;
};

export { getPatientData };
