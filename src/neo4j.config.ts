import neo4j from 'neo4j-driver';

export const createDriver = () => {
  const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
  const username = process.env.NEO4J_USERNAME || 'neo4j';
  const password = process.env.NEO4J_PASSWORD || 'password';

  return neo4j.driver(uri, neo4j.auth.basic(username, password));
};
