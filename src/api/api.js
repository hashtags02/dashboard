import axios from 'axios';

// 🔐 Different tokens for each endpoint
const clientsToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbGFtLXZlaW4tZGV0ZWN0aW9uIiwiZW1haWwiOiJzdXBlcnVzZXJAcHZkLmNvbSIsImZpcnN0X25hbWUiOiJzdXBlciIsImxhc3RfbmFtZSI6InVzZXIiLCJleHAiOjE3NTM1OTY5MzZ9.l0rsIL1Vzd3J7nSmPARd4IsDzf-q8k4g2-SCdRadrcnHVLj3p0VnJPjvsX7wdVRY7p42vYcr0c7P_vafwV_raHOkC_Z16f21H076PFmfja1AmrdTF1Mh1OeuEnh4jW-N8YVmRaGphjyyjxSr4C_MU9TdA0RNv1h7-woURyeHmhRuzu6NNnhDYqK0KQByGoOpJBRG0xYYSj1Uzlb9qpMkFvdV9WSeRbLw4Q6e7KXSF40-4qmu8fKcd9YD98TvaU5NuAEsD_Kfy1r9vjYXZbODoBiqt52pKV3Hb5QWB7BWcnukHvmbM6GLaLpcvS1b8BFRgDySyQiflbOGCpabt2oUdQ';
const usersToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbGFtLXZlaW4tZGV0ZWN0aW9uIiwiZW1haWwiOiJzdXBlcnVzZXJAcHZkLmNvbSIsImZpcnN0X25hbWUiOiJzdXBlciIsImxhc3RfbmFtZSI6InVzZXIiLCJleHAiOjE3NTM1OTc1NDN9.FlBzG7_a7aoiezZDEiKdNFKSvUMk-HIeVdlAx_JZw7NKvqpgIgeWjBzanSNQSxTybMpHvvCn7rR02gBLISCoeKJe2xDtSUaaLqEN61CbTHWsLcdEYanhyPHBQf9FVAtHWJxKYQ4yo5rdV98Y9CLn-uStoVSTrHpGNI-iTvce1RpppdsQvudln8cyIcQsMVMJ7WWy1ErQjZXyzZDA3Qfuos63D0W-Uc2I1rVcc7_qNL2W6djy9C_brVsmp4WJ5cK2b469IX0RmmcACuDjsVtG0A6GCV92O1R2AAcTjnxFWUkupU_n5Z9dRyA7jAC5pC6VZnJlYWthtbR7qQWvFL1msA';
const verificationsToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbGFtLXZlaW4tZGV0ZWN0aW9uIiwiZW1haWwiOiJzdXBlcnVzZXJAcHZkLmNvbSIsImZpcnN0X25hbWUiOiJzdXBlciIsImxhc3RfbmFtZSI6InVzZXIiLCJleHAiOjE3NTM1OTg2OTl9.a43YDx7sFLKk4IQiOPD-E2ueQBL0fFxKxS5bCEENoxeJlj0veY0z_MegTc79Tl-eNgIYU-BAqvzE7tjEU8OxjLqRmi42WVg_iYciSk6ZGDs9OPMWtFd_ppjGTs-nXth2b-sisD9FyxoZr-yuyPpTwQqInDxRkRaomY6qnQYG0IUFeYA-6tZ9D2ok3bv0WvCtpclJZusNF22Py4q9dbafqPpThDkHBg2ee1i959lYFlyQGVpe1Ct9VWu6xxnbsZSh8dVd7BKUU8JEQCZMuW_hbS8eKDiB3QtQnLgkiT9ba2zAIjbFQnsrurikehQz52D27LHW7o747QLP_Bde-6NP4Q';

// 🧾 Clients Count API
export const getClientsCount = () => {
  return axios.get('http://localhost:8081/pvd/clients/count', {
    headers: {
      accept: '*/*',
      Authorization: clientsToken,
    },
  });
};

// 👤 Users Count API
export const getUsersCount = () => {
  return axios.get('http://localhost:8081/pvd/end-users/count', {
    headers: {
      accept: '*/*',
      Authorization: usersToken,
    },
  });
};

// ✅ Verifications Count API
export const getVerificationsCount = () => {
  return axios.get('http://localhost:8081/pvd/globals/verification/count', {
    headers: {
      accept: '*/*',
      Authorization: verificationsToken,
    },
  });
};
