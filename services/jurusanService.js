import fetch from 'node-fetch';

const JURUSAN_API_URL = 'https://jurusan-production.up.railway.app/recommend';

export async function postJurusanRecommendation(data) {
  const res = await fetch(JURUSAN_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error('Gagal mengambil data jurusan');
  return res.json();
}
