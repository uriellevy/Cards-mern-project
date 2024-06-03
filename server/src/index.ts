import express from "express";
import cors from "cors";
import 'dotenv/config'
import chalk from "chalk";
import morgan from "morgan";
import mongoose from "mongoose";
import userRoutes from "./routes/User"
import errorHandler from "./middleware/ErrorHandler";

const log = console.log;
const PORT = process.env.PORT || 4005;

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/api/user", userRoutes);
// app.use(errorHandler);




app.listen(PORT, () => log(chalk.bgBlue.bold(`server is running on http://localhost:${PORT}`)));

mongoose.connect('mongodb://127.0.0.1:27017/uriel-nodejs')
.then(() => log(chalk.bgYellow.bold("mongoose connected")))
.catch((error) => log(chalk.bgRed.bold(error)));