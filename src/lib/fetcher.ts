export const fetcher = async (url: string, method: "GET" | "POST" = "GET") => {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MAYAR_API_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Gagal memuat data");
  return res.json();
};
