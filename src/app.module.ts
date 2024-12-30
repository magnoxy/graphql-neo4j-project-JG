import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ConfigModule } from '@nestjs/config';
import { createDriver } from './neo4j.config';
import { readFileSync } from 'fs';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => {
        const typeDefs = readFileSync(
          join(process.cwd(), '/src/schema.graphql'),
        ).toString();
        const driver = createDriver();
        const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

        return {
          autoSchemaFile: false,
          schema: await neoSchema.getSchema(),
          // Removendo a configuração CORS
          cors: false, // Desativa o CORS
        };
      },
    }),
  ],
})
export class AppModule {}
