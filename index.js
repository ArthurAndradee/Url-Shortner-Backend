import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import QRCode from 'qrcode'
import bodyParser from 'body-parser';
dotenv.config({ path: './.env' });

console.log(process.env.MONGO_URI)

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import urlsRouter from './routes/urls.js';
app.use('/api', urlsRouter);

app.post('/generate/qrcode', async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
  
    try {
      const qrCode = await QRCode.toString(text, { type: 'svg' });
      const base64QrCode = Buffer.from(qrCode).toString('base64');
      res.json({ qrCode: base64QrCode });
      console.log(qrCode)
      console.log(base64QrCode)
    } catch (err) {
      console.error('Failed to generate QR code', err);
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(5000, () => console.log("Server is running"))