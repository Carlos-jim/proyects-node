import { Router } from "express";
import { ping } from "../controllers/index.controller.js";
import { check } from 'express-validator';


const router = Router()


router.get('/ping', ping)


export default router