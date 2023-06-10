import express from 'express';
import apiRoute from './api';
import viewRoute from './view';

const rootRoute = express.Router();

rootRoute.use('/api', apiRoute);
rootRoute.use('/', viewRoute);

export default rootRoute;
