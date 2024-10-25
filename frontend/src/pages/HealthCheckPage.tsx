// src/pages/HealthCheckPage.tsx
import React, { useEffect, useState } from 'react';

interface HealthStatus {
  postgres: string;
  timescale: string;
  mongo: string;
  neo4j: string;
}

const HealthCheckPage: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);

  useEffect(() => {
    const fetchHealthStatus = async () => {
      try {
        const response = await fetch('/api/health-check');
        const data = await response.json();
        setHealthStatus(data);
      } catch (error) {
        console.error('Failed to fetch health status:', error);
      }
    };

    fetchHealthStatus();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Database Connection Health Check</h1>
      {healthStatus ? (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>PostgreSQL:</strong> {healthStatus.postgres}
          </li>
          <li>
            <strong>TimescaleDB:</strong> {healthStatus.timescale}
          </li>
          <li>
            <strong>MongoDB:</strong> {healthStatus.mongo}
          </li>
          <li>
            <strong>Neo4j:</strong> {healthStatus.neo4j}
          </li>
        </ul>
      ) : (
        <p>Loading health status...</p>
      )}
    </div>
  );
};

export default HealthCheckPage;
