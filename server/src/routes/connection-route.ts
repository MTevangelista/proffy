import express from 'express'
import ConnectionController from '../controllers/ConnectionsController'

const route = express.Router()
const connectionsController = new ConnectionController()

route.get('/', connectionsController.index)
route.post('/', connectionsController.create)

export default route