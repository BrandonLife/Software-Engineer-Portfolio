const router = require('express').Router()

const {
    sendEmail
} = require("../controllers/EmailControllers")


router.post('/email/send', sendEmail)

module.exports = router