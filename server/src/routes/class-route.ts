import express from 'express'
import ClassesController from '../controllers/ClassesController'

const route = express.Router()
const classesControllers = new ClassesController()

route.get('/', classesControllers.index)
route.post('/', classesControllers.create)

export default route