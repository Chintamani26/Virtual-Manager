// src/routes/healthCheckRoutes.ts
import express from 'express';
import prisma from '../config/prisma';
import timescaleClient from '../config/timescale';
import { MongoClient } from 'mongodb';
import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// MongoDB and Neo4j connections
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/virtual_manager_db';
const neo4jUrl = process.env.NEO4J_URL || 'neo4j://localhost';
const neo4jUser = process.env.NEO4J_USER || 'neo4j';
const neo4jPassword = process.env.NEO4J_PASSWORD || 'admin123';

const mongoClient = new MongoClient(mongoUrl);
const neo4jDriver = neo4j.driver(
    neo4jUrl,
    neo4j.auth.basic(neo4jUser, neo4jPassword)
);

router.get('/api/health-check', async (req, res) => {
    const status: Record<string, string> = {};

    // PostgreSQL (Prisma)
    try {
        await prisma.$connect();
        status.postgres = 'Connected';
    } catch (error) {
        status.postgres = `Failed: ${error.message}`;
    }

    // TimescaleDB (using pg client)
    try {
        await timescaleClient.query('SELECT NOW()');
        status.timescale = 'Connected';
    } catch (error) {
        status.timescale = `Failed: ${error.message}`;
    }

    // MongoDB
    try {
        await mongoClient.connect();
        status.mongo = 'Connected';
    } catch (error) {
        status.mongo = `Failed: ${error.message}`;
    }

    // Neo4j
    try {
        const session = neo4jDriver.session();
        await session.run('RETURN 1');
        status.neo4j = 'Connected';
        await session.close();
    } catch (error) {
        status.neo4j = `Failed: ${error.message}`;
    }

    res.json(status);
});

export default router;
