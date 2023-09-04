import { Request, Response } from "express";

export {}
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(express.static('client'));
router.use(express.json());

router.get('/', async (req:Request, res:Response) => {
    res.json({status: true, message: "You're now in test2"});
});

router.post('/', async (req:Request, res:Response) => {
    res.json({status: true});
});

module.exports = router;