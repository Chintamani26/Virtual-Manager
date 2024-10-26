// services/neo4jService.ts
import neo4j from 'neo4j-driver';
// import { configDotenv } from "dotenv";
// configDotenv();

const driver = neo4j.driver(
    process.env.NEO4J_URL,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

export async function addEmployeeSkills(employeeId: string, skills: string[]) {
    const session = driver.session();
    try {
        await session.run(
            `
      MERGE (e:Employee {id: $employeeId})
      WITH e
      UNWIND $skills AS skill
      MERGE (s:Skill {name: skill})
      MERGE (e)-[:HAS_SKILL]->(s)
      `,
            { employeeId, skills }
        );
    } finally {
        await session.close();
    }
}

// More Neo4j-related functions as required
