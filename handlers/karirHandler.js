import karir from '../data/karir.json' assert { type: "json" };

export const getAllKarir = (request, h) => {
  return h.response(karir).code(200);
};
