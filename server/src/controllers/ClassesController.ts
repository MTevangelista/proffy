import { Request, Response } from 'express'

const repository = require('../repositories/ClassesRepository')

export default class ClassesController {
    async index(req: Request, res: Response) {
        const filters = req.query

        if (!filters.week_day || !filters.subject || !filters.time) {
            res.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        try {
            let classes = await repository.getAll(filters)
            return res.json(classes)
        } catch (e) {
            return res.status(400).json({
                error: 'Unexpected error while listing all classes'
            })
        }
    }

    async create(req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body

        try {
            await repository.create(
                name,
                avatar,
                whatsapp,
                bio,
                subject, 
                cost, 
                schedule
            )
            return res.status(201).send()
        } catch (e) {
            return res.status(400).json({
                error: 'Unexpected error while creating a new class'
            })
        }
    }
}