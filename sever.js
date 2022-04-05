require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// สร้างการเชื่อมต่อกับ database
const mongoData = process.env.DATABASE_URL
mongoose.connect(mongoData,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
const database = mongoose.connection;

database.on('error',(error)=>{
  console.log(error);
})

database.once('connected', ()=>{
  console.log("Database Connected!");
})

const app = express();

app.use(cors());
app.use(express.json());

//import routes
const routes = require('./routes/routes')

app.use('/api',routes)


app.listen(4000, ()=> {
  console.log(`Server Started at ${4000}`);
})