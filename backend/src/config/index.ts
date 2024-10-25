// backend/src/config/index.ts
import prisma from './prisma';
import mongoose from './mongodb';
import timescaleClient from './timescale';
import neo4jDriver from './neo4j';

export {
    prisma,
    mongoose,
    timescaleClient,
    neo4jDriver
};
