// backend/src/config/postgres.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Failed to connect to PostgreSQL:', err));

export default prisma;
