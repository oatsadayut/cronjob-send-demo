import knex from "../config/database.js";

const getAllergyIntolerance = async () => {
  
  // Get data his
  // const data = await knex.raw("SELECT * FROM ... limit 10");

  let AllergyIntoleranceOpject = {
    managingOrganization: {
      type: "Organization",
      identifier: {
        use: "official",
        system: "https://bps.moph.go.th/hcode/5",
        value: "99999",
      },
      display: "โรงพยาบาลทดสอบระบบ",
    },
    identifier: [
      {
        system: "http://acme.com/ids/patients/risks",
        value: "49476535",
      },
    ],
    clinicalStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          code: "active",
          display: "Active",
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          code: "confirmed",
          display: "Confirmed",
        },
      ],
    },
    type: "allergy",
    category: [
      // กรณีแพ้อาหาร ระบุเป็น "food"
      "medication",
    ],
    criticality: "high",
    code: {
      coding: [
        {
          system:
            "https://phr1.moph.go.th/api/CodingSystem?System=tmt_substance",
          code: "579224",
          display: "PENICILLIN G SODIUM",
        },
      ],
    },
    seriousness: {
      coding: [
        {
          system:
            "https://phr1.moph.go.th/api/CodingSystem?System=allergy_seriousness",
          code: "1",
          display: "ไม่ร้ายแรง",
        },
      ],
    },
    allergyGroup: {
      coding: [
        {
          system:
            "https://phr1.moph.go.th/api/CodingSystem?System=allergy_group",
          code: "1",
          display: "Cardiovascular diaorder",
        },
      ],
    },
    allergyInformationSource: {
      coding: [
        {
          system:
            "https://phr1.moph.go.th/api/CodingSystem?System=allergy_source",
          code: "1",
          display: "มาโรงพยาบาล",
        },
      ],
    },
    allergyResult: {
      coding: [
        {
          system:
            "https://phr1.moph.go.th/api/CodingSystem?System=allergy_result",
          code: "1",
          display: "หายเป็นปกติ",
        },
      ],
    },
    naranjoResult: {
      coding: [
        {
          system:
            "https://phr1.moph.go.th/api/CodingSystem?System=allergy_naranjo_result",
          code: "1",
          display: "Definite - ใช่แน่",
        },
      ],
    },
    preventable: false,
    preventableScore: 1,
    recordedDate: "2015-08-06T15:37:31-06:00",
    recordOfficer: {
      reference: "Practitioner/ว000099",
      identifier: "ว000099",
      display: "นพ.ทดสอบ ระบบ 2",
    },
    reaction: [
      {
        manifestation: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "247472004",
                display: "Hives",
              },
            ],
          },
        ],
      },
    ],
  };

  return AllergyIntoleranceOpject;
};

export { getAllergyIntolerance };
