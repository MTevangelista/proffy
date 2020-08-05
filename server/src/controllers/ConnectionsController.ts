import { Request, Response } from 'express'

const repository = require('../repositories/connectionsRepository')

export default class ConnectionController {
    async index(req: Request, res: Response) {
        try {
            let total = await repository.getAll()
            return res.json({ total })
        } catch (e) {
            return res.status(400).json({
                error: 'Unexpected error while listing all connections'
            })
        }
    }

    async create(req: Request, res: Response) {
        const { user_id } = req.body

        try {
            await repository.create(
                user_id 
            )

            return res.status(201).send()
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                error: 'Unexpected error while creating a new connection'
            })
        }
    }
}