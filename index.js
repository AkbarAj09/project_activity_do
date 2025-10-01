import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
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
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  const { type, participants } = req.body;
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/filter", {
      params: {
        type,
        participants,
      },
    });
    const activities = response.data;
    if (activities && activities.length > 0) {
      // Ambil satu activity random dari hasil filter
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      res.render("index.ejs", { data: randomActivity, error: null });
    } else {
      res.render("index.ejs", { data: null, error: "No activities that match your criteria." });
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.render("index.ejs", { data: null, error: "No activities that match your criteria." });
    } else {
      res.render("index.ejs", { data: null, error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
