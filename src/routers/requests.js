const express = require('express')
const router = new express.Router();
const ODIRanking = require("../models/odiRanking");

/* create request */
router.post('/ranking', async (req, res) => {

    try {
        const team = new ODIRanking(req.body);
        console.log(req.body);
        const insertTeam = await team.save();
        res.status(201).send(insertTeam);
    } catch (e) {
        res.status(400).send(e);
    }

})
/* read (GET) request */
router.get('/ranking', async (req, res) => {

    try {
        const teams = await ODIRanking.find().sort({ "position": 1 })
        res.send(teams);
    } catch (e) {
        res.status(400).send(e);
    }

})
/* read API for a particular team */
router.get('/ranking/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const teams = await ODIRanking.findById(_id);
        if (!teams) {
            return res.status(404).send();
        } else {
            res.send(teams);
        }
    } catch (e) {
        res.status(500).send(e);
    }

})
/* update API */
router.patch('/ranking/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const teams = await ODIRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        if (!teams) {
            return res.status(404).send();
        } else {
            res.send(teams);
        }
    } catch (e) {
        res.status(500).send(e);
    }

})
/* delete request */
router.delete('/ranking/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const teams = await ODIRanking.findByIdAndDelete(_id);
        if (!teams) {
            return res.status(404).send();
        } else {
            res.send(teams);
        }
    } catch (e) {
        res.status(500).send(e);
    }

})

module.exports = router;