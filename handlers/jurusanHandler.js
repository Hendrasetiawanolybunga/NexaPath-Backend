import jurusan from '../data/jurusan.json' assert { type: "json" };

export const getAllJurusan = (request, h) => {
  return h.response(jurusan).code(200);
};
