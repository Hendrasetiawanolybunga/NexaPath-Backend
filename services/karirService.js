import fetch from 'node-fetch';

const KARIR_API_URL = 'https://web-production-9a610.up.railway.app/predict';

export async function postKarirPrediction(data) {
  console.log("[DEBUG] Payload yang dikirim ke API karir:", data);

  try {
    const res = await fetch(KARIR_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const text = await res.text();
    console.log("[DEBUG] Status dari API:", res.status);
    console.log("[DEBUG] Response body:", text);

    if (!res.ok) {
      throw new Error(`Gagal mengambil data karir: ${res.status} - ${text}`);
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("[ERROR] Gagal dalam postKarirPrediction:", error.message);
    throw error;
  }
}
