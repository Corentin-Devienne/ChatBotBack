const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index.js')

/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: Home route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', dialogController.home)

/**
 * @swagger
 * /api/v1/dialogs:
 *  get:
 *    description: get dialogs (question, answer)
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/dialogs', dialogController.dialogs)

/**
 * @swagger
 * /api/v1/dialogs:
 *  post:
 *    description: post dialogs (question, answer)
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/dialogs', dialogController.dialogp)

module.exports = router