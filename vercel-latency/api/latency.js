export default function handler(req, res) {
  const start = Date.now();
  // Simulate minimal processing
  const latency = Date.now() - start;
  res.status(200).json({
    latency,
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "unknown"
  });
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const start = Date.now();
  const latency = Date.now() - start;

  res.status(200).json({
    latency,
    timestamp: new Date().toISOString()
  });
}