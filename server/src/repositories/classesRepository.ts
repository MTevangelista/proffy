import db from '../database/connection'

import convertHourToMinute from '../utils/convertHourToMinutes'

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

exports.getAll = async(filters: any)  => {
    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    const timeInMinutes = convertHourToMinute(time)

    const classes = await db('classes')
        .whereExists(function() {
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*'])
    
    return classes       
}

exports.create = async(name: string, avatar: string, whatsapp: string, bio: string, subject: string, cost: number, schedule: any) => {
    const trx = await db.transaction()

    try {
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        })
    
        const user_id = insertedUsersIds[0]
    
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id
        })
    
        const class_id = insertedClassesIds[0]
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinute(scheduleItem.from),
                to: convertHourToMinute(scheduleItem.to)
            }
        })
    
        await trx('class_schedule').insert(classSchedule)
    
        await trx.commit()
    } catch (e) {
       await trx.rollback()
    }
}