const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/bathrooms", require("./routes/api/bathroom"));
app.use("/api/restaurants", require("./routes/api/restaurant"));
app.use("/api/bathReview", require("./routes/api/bathReview"));
app.use("/api/restReview", require("./routes/api/restReview"));

if (process.env.NODE.ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
