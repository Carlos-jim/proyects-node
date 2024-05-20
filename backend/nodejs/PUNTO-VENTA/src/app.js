import express from 'express'
import indexRoutas from './router/index.routes.js'
const app = express()

app.use(express.json())

//app.use('/api', empleadosRoutas)
app.use(indexRoutas)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });
  

  export default app