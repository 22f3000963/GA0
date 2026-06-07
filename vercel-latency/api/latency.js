export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const start = Date.now();
  const latency = Date.now() - start;

  return res.status(200).json({
    latency,
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "unknown"
  });
}