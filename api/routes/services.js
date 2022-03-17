const { feesGenerator, feesComputation } = require('../controllers/servicesController')

const router = require('express').Router()

router.post("/fees", feesGenerator)
router.post("/compute-transaction-fee", feesComputation)

module.exports = router