// backend/src/config/mongodb.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/virtual_manager_db'; // Use IPv4
console.log('MongoDB Connection URI:', mongoUri); // Debugging output

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err.message)); // Log error message

export default mongoose;
