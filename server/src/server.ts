import express from 'express'
import cors from 'cors'

import classRoute from './routes/class-route'
import connectionRoute from './routes/connection-route'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/classes', classRoute)
app.use('/connections', connectionRoute)

const port = 3333
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})