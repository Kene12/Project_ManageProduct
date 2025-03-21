import express from 'express';
import config from './config/config.json';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
const port = config.port
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
})
);

mongoose.connect(config.MONGO_URI,).then(() => {
  console.log('MongoDB Connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.post('/register', async (req, res)=>{
  try{
    
  } catch(err){
    res.status(500).json({ error: err.message });
  }
})


app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
