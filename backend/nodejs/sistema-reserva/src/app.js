import express from 'express'
import restauranteRoutas from  './router/restaurant.routes.js'
import indexRoutas from './router/index.routes.js'
const app = express()

app.use(express.json())
app.use('/api', restauranteRoutas)
app.use(indexRoutas)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });
  

  export default app