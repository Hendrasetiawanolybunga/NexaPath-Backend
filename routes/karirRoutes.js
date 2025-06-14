import { postKarirPrediction } from '../services/karirService.js';

export default [
  {
    method: 'POST',
    path: '/api/karir',
    handler: async (request, h) => {
        try {
          console.log("[RECEIVED PAYLOAD]", request.payload);
          const result = await postKarirPrediction(request.payload);
          return h.response(result).code(200);
        } catch (err) {
          console.error("[ERROR] /api/karir:", err.message);
          return h.response({ error: err.message }).code(500);
        }
      }
      
  }
];
