import express from 'express';
import apiV1Route from './v1';

const apiRoute = express.Router();

apiRoute.use('/v1', apiV1Route);

export default apiRoute;
