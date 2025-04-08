import express from 'express'
import treesRoutes from './routes/route.js'

const app = express();

app.use(express.json());
app.use('/', treesRoutes)

app.listen(3010,()=>{
    console.log('Server is running on port 3010')
})