const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`app listening on ${PORT}`.yellow.bold));
