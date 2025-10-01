import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result, error: null });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      data: null,
      error: "Failed to fetch activity. Please try again.",
    });
  }
});

app.post("/", async (req, res) => {
  const { type, participants } = req.body;
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/filter", {
      params: { type, participants },
    });
    // API ini mengembalikan satu objek random jika ditemukan, atau array kosong jika tidak
    const result = response.data;
    if (result && result.length > 0) {
      // Ambil satu activity random dari hasil filter
      const randomActivity = result[Math.floor(Math.random() * result.length)];
      res.render("index.ejs", { data: randomActivity, error: null });
    } else {
      res.render("index.ejs", { data: null, error: "No activities that match your criteria." });
    }
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { data: null, error: "No activities that match your criteria." });
  }
});

// Jalankan server HANYA untuk lokal
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}

// Ekspor app
export default app;