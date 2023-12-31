import { Router } from "express";
import { getNameJonas, getNameCesar } from "../controllers/color.controller";

const NameRouter = Router();

NameRouter.get('/Jonas', getNameJonas);
NameRouter.get('/Cesar', getNameCesar);

export default NameRouter;