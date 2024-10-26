// backend/src/config/neo4j.ts
import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
    process.env.NEO4J_URL || 'bolt://localhost:7687',
    neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASSWORD || 'admin123')
);

driver.verifyConnectivity()
    .then(() => console.log('Connected to Neo4j'))
    .catch(err => console.error('Failed to connect to Neo4j:', err));

export default driver;
