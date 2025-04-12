// server/importBuyers.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import fs from 'fs';
import csv from 'csv-parser';
import Buyer from './models/Buyer.js';

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.join(__dirname, './.env') });

// Debug log
console.log('📦 MONGODB_URI:', process.env.MONGODB_URI);

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('❌ MONGODB_URI is not defined in .env');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    importCSV();
  })
  .catch((err) => {
    console.error('❌ Connection Error:', err);
  });

function importCSV() {
  const results = [];
  fs.createReadStream(path.join(__dirname, 'buyers.csv'))
    .pipe(csv())
    .on('data', (data) => {
      const cleaned = {};
      for (const key in data) {
        cleaned[key.trim()] = data[key].trim(); // Trim both keys and values
      }
      results.push(cleaned);
    })
    .on('end', async () => {
      try {
        for (const row of results) {
          await Buyer.create({
            name: row['Name'],
            state: row['State'],
            location: row['Location'],
            website: row['Website'],
          });

          console.log(`✅ Inserted: ${row['Name']}`);
        }

        console.log('🎉 All data inserted!');
        mongoose.disconnect();
      } catch (err) {
        console.error('❌ Import error:', err);
      }
    });
}
