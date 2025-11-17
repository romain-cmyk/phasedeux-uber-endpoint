export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    service: "PhaseDeux Uber Eats Integration",
    timestamp: new Date().toISOString()
  });
}
