import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleContact } from "./contactHandler.js";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const allowedOrigins = new Set(
  [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    process.env.FRONTEND_URL,
  ].filter(Boolean)
);

app.use(
  cors({
    origin(origin, callback) {
      // Allow tools such as curl/Postman and same-origin requests.
      if (!origin || allowedOrigins.has(origin)) return callback(null, true);
      return callback(new Error("CORS origin not allowed"));
    },
  })
);
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "Backend is running." });
});

app.post("/api/contact", handleContact);

app.use((error, _req, res, _next) => {
  console.error("Backend error:", error);
  res.status(500).json({ success: false, message: "Server error." });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log(`Contact API: http://localhost:${PORT}/api/contact`);
});
