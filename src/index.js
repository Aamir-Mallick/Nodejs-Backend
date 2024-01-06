import 'dotenv/config'
import connectDB from './db/index.js'
import { app } from './app.js'

connectDB()
.then(()=> {
  app.listen(process.env.PORT, ()=>{
    console.log("Listening at " + process.env.PORT)
  })
})
.catch((err)=> {
    console.log("mongo db error failed", err)
})

