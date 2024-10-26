// src/config/timescale.ts
import { Client } from 'pg';

const timescaleClient = new Client({
    connectionString: process.env.DATABASE_URL,
});

timescaleClient.connect()
    .then(() => console.log('Connected to TimescaleDB'))
    .catch(err => console.error('Failed to connect to TimescaleDB:', err));

export default timescaleClient;
