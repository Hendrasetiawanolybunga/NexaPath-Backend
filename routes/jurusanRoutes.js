import { postJurusanRecommendation } from '../services/jurusanService.js';

export default [
  {
    method: 'POST',
    path: '/api/jurusan',
    handler: async (request, h) => {
      try {
        const result = await postJurusanRecommendation(request.payload);

        // Pastikan ada rekomendasi
        const firstRecommendation = result.recommendations?.[0];

        if (!firstRecommendation) {
          return h.response({
            jurusan: "Gagal memuat",
            peluang: 0,
            daya_tampung: 0,
          }).code(200);
        }

        // Mapping format ke yang dimengerti frontend
        const mappedData = {
          jurusan: firstRecommendation.major_name || "Tidak diketahui",
          peluang: firstRecommendation.prob_pass || 0,
          daya_tampung: firstRecommendation.utbk_capacity || 0,
          universitas: firstRecommendation.university_name || "",
        };

        return h.response(mappedData).code(200);
      } catch (err) {
        console.error(err);
        return h.response({ error: "Gagal mengambil data jurusan" }).code(500);
      }
    }
  }
];
