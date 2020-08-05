import db from '../database/connection'

exports.getAll = async() => {
    const totalConnections = await db('connections').count('* as total')

    const { total } = totalConnections[0]

    return total
}

exports.create = async(user_id: number) => {
    await db('connections').insert({
        user_id
    })
}