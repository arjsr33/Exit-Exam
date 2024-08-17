const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const otpRouter = require('./router/router'); 

dotenv.config(); 

const app = express();
app.use(cors());
app.use(cors({
  origin:'https://arjexitexam.vercel.app'
}));
app.use(express.json());

mongoose.connect(process.env.mongodb_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

app.use('/api', otpRouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
