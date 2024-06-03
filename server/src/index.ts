import express from "express";
import cors from "cors";
import 'dotenv/config'
import chalk from "chalk";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const log = console.log;
const PORT = process.env.PORT || 4005;

app.use(cors());

app.listen(PORT, () => log(chalk.bgBlue.bold(`server is running on http://localhost:${PORT}`)));

mongoose.connect('mongodb://127.0.0.1:27017/uriel-nodejs')
.then(() => log(chalk.bgYellow.bold("mongoose connected")))
.catch((error) => log(chalk.bgRed.bold(error)));