const express = require("express")
const router = express.Router()
const controller = require('../controller/controller')

router.post('/post-uplode', controller.post_uplode);

module.exports = router;