import neo4j from 'neo4j-driver';

export const createDriver = () => {
  const uri =
    process.env.NEO4J_URI || 'neo4j+s://79594acd.databases.neo4j.io:7687';
  const username = process.env.NEO4J_USERNAME || 'neo4j';
  const password =
    process.env.NEO4J_PASSWORD || 'RGWDoWdns37gaKdNEgE5QepYz-PX4Bm4JrxhMRVkp_4';

  return neo4j.driver(uri, neo4j.auth.basic(username, password));
};
