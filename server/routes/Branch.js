const express = require('express');
const router = express.Router();
const { Branch } = require('../models');

router.post('/add', async (req, res) => {
    const branch = req.body;
    await Branch.create(branch);
    res.json(branch);
});

module.exports = router;