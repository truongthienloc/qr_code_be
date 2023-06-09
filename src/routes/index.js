import express from "express";
import apiRoute from "./api";

const rootRoute = express.Router();

rootRoute.use('/api', apiRoute);

export default rootRoute;