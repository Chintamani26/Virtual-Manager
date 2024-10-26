import express from 'express';
import cors from 'cors';
import prisma from './config/prisma';
import mongoose from './config/mongodb';
import driver from './config/neo4j';

const app = express();
app.use(cors());
app.use(express.json());

// Connect Prisma (PostgreSQL/TimescaleDB)
const prismaConnect = prisma.$connect()
    .then(() => console.log('Connected to PostgreSQL/TimescaleDB'));

// Connect MongoDB
const mongooseConnect = new Promise((resolve, reject) => {
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
        resolve(true);  // Resolve the promise when connected
    });
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
        reject(err);  // Reject the promise if there's an error
    });
});

// Connect Neo4j
const neo4jConnect = driver.verifyConnectivity()
    .then(() => console.log('Connected to Neo4j'))
    .catch(err => {
        console.error('Neo4j connection failed:', err);
        throw err;  // Throw error to reject the promise
    });

// Wait for all connections to be established
Promise.all([prismaConnect, mongooseConnect, neo4jConnect])
    .then(() => {
        // Start server only after all connections are established
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error establishing database connections:', err);
        process.exit(1);  // Exit the process with an error code
    });
