export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  Date: { input: any; output: any };
};

/**
 * The edge properties for the following fields:
 * * Actor.actedInMovies
 * * Movie.actorsActedIn
 */
export type ActedInProperties = {
  __typename?: 'ActedInProperties';
  role: Scalars['String']['output'];
};

export type ActedInPropertiesAggregationWhereInput = {
  AND?: InputMaybe<Array<ActedInPropertiesAggregationWhereInput>>;
  NOT?: InputMaybe<ActedInPropertiesAggregationWhereInput>;
  OR?: InputMaybe<Array<ActedInPropertiesAggregationWhereInput>>;
  role_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  role_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ActedInPropertiesCreateInput = {
  role: Scalars['String']['input'];
};

export type ActedInPropertiesSort = {
  role?: InputMaybe<SortDirection>;
};

export type ActedInPropertiesUpdateInput = {
  role_SET?: InputMaybe<Scalars['String']['input']>;
};

export type ActedInPropertiesWhere = {
  AND?: InputMaybe<Array<ActedInPropertiesWhere>>;
  NOT?: InputMaybe<ActedInPropertiesWhere>;
  OR?: InputMaybe<Array<ActedInPropertiesWhere>>;
  role_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  role_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  role_EQ?: InputMaybe<Scalars['String']['input']>;
  role_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  role_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Actor = {
  __typename?: 'Actor';
  actedInMovies: Array<Movie>;
  actedInMoviesAggregate?: Maybe<ActorMovieActedInMoviesAggregationSelection>;
  actedInMoviesConnection: ActorActedInMoviesConnection;
  bio: Scalars['String']['output'];
  born: Scalars['Date']['output'];
  bornIn: Scalars['String']['output'];
  imdbId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  poster: Scalars['String']['output'];
  tmdbId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ActorActedInMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieSort>>;
  where?: InputMaybe<MovieWhere>;
};

export type ActorActedInMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type ActorActedInMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ActorActedInMoviesConnectionSort>>;
  where?: InputMaybe<ActorActedInMoviesConnectionWhere>;
};

export type ActorActedInMoviesAggregateInput = {
  AND?: InputMaybe<Array<ActorActedInMoviesAggregateInput>>;
  NOT?: InputMaybe<ActorActedInMoviesAggregateInput>;
  OR?: InputMaybe<Array<ActorActedInMoviesAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ActedInPropertiesAggregationWhereInput>;
  node?: InputMaybe<ActorActedInMoviesNodeAggregationWhereInput>;
};

export type ActorActedInMoviesConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  edge: ActedInPropertiesCreateInput;
  where?: InputMaybe<MovieConnectWhere>;
};

export type ActorActedInMoviesConnection = {
  __typename?: 'ActorActedInMoviesConnection';
  edges: Array<ActorActedInMoviesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActorActedInMoviesConnectionSort = {
  edge?: InputMaybe<ActedInPropertiesSort>;
  node?: InputMaybe<MovieSort>;
};

export type ActorActedInMoviesConnectionWhere = {
  AND?: InputMaybe<Array<ActorActedInMoviesConnectionWhere>>;
  NOT?: InputMaybe<ActorActedInMoviesConnectionWhere>;
  OR?: InputMaybe<Array<ActorActedInMoviesConnectionWhere>>;
  edge?: InputMaybe<ActedInPropertiesWhere>;
  node?: InputMaybe<MovieWhere>;
};

export type ActorActedInMoviesCreateFieldInput = {
  edge: ActedInPropertiesCreateInput;
  node: MovieCreateInput;
};

export type ActorActedInMoviesDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<ActorActedInMoviesConnectionWhere>;
};

export type ActorActedInMoviesDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<ActorActedInMoviesConnectionWhere>;
};

export type ActorActedInMoviesFieldInput = {
  connect?: InputMaybe<Array<ActorActedInMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<ActorActedInMoviesCreateFieldInput>>;
};

export type ActorActedInMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActorActedInMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ActorActedInMoviesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ActorActedInMoviesNodeAggregationWhereInput>>;
  imdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  plot_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  plot_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  released_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  revenue_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ActorActedInMoviesRelationship = {
  __typename?: 'ActorActedInMoviesRelationship';
  cursor: Scalars['String']['output'];
  node: Movie;
  properties: ActedInProperties;
};

export type ActorActedInMoviesUpdateConnectionInput = {
  edge?: InputMaybe<ActedInPropertiesUpdateInput>;
  node?: InputMaybe<MovieUpdateInput>;
};

export type ActorActedInMoviesUpdateFieldInput = {
  connect?: InputMaybe<Array<ActorActedInMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<ActorActedInMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<ActorActedInMoviesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ActorActedInMoviesDisconnectFieldInput>>;
  update?: InputMaybe<ActorActedInMoviesUpdateConnectionInput>;
  where?: InputMaybe<ActorActedInMoviesConnectionWhere>;
};

export type ActorAggregateSelection = {
  __typename?: 'ActorAggregateSelection';
  bio: StringAggregateSelection;
  bornIn: StringAggregateSelection;
  count: Scalars['Int']['output'];
  imdbId: StringAggregateSelection;
  name: StringAggregateSelection;
  poster: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type ActorConnectInput = {
  actedInMovies?: InputMaybe<Array<ActorActedInMoviesConnectFieldInput>>;
};

export type ActorConnectWhere = {
  node: ActorWhere;
};

export type ActorCreateInput = {
  actedInMovies?: InputMaybe<ActorActedInMoviesFieldInput>;
  bio: Scalars['String']['input'];
  born: Scalars['Date']['input'];
  bornIn: Scalars['String']['input'];
  imdbId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  poster: Scalars['String']['input'];
  tmdbId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ActorDeleteInput = {
  actedInMovies?: InputMaybe<Array<ActorActedInMoviesDeleteFieldInput>>;
};

export type ActorDisconnectInput = {
  actedInMovies?: InputMaybe<Array<ActorActedInMoviesDisconnectFieldInput>>;
};

export type ActorEdge = {
  __typename?: 'ActorEdge';
  cursor: Scalars['String']['output'];
  node: Actor;
};

export type ActorMovieActedInMoviesAggregationSelection = {
  __typename?: 'ActorMovieActedInMoviesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<ActorMovieActedInMoviesEdgeAggregateSelection>;
  node?: Maybe<ActorMovieActedInMoviesNodeAggregateSelection>;
};

export type ActorMovieActedInMoviesEdgeAggregateSelection = {
  __typename?: 'ActorMovieActedInMoviesEdgeAggregateSelection';
  role: StringAggregateSelection;
};

export type ActorMovieActedInMoviesNodeAggregateSelection = {
  __typename?: 'ActorMovieActedInMoviesNodeAggregateSelection';
  imdbId: StringAggregateSelection;
  imdbRating: FloatAggregateSelection;
  imdbVotes: BigIntAggregateSelection;
  plot: StringAggregateSelection;
  poster: StringAggregateSelection;
  releaseDate: StringAggregateSelection;
  released: StringAggregateSelection;
  revenue: BigIntAggregateSelection;
  runtime: BigIntAggregateSelection;
  title: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
  year: BigIntAggregateSelection;
};

export type ActorOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ActorSort objects to sort Actors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActorSort>>;
};

/** Fields to sort Actors by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActorSort object. */
export type ActorSort = {
  bio?: InputMaybe<SortDirection>;
  born?: InputMaybe<SortDirection>;
  bornIn?: InputMaybe<SortDirection>;
  imdbId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  poster?: InputMaybe<SortDirection>;
  tmdbId?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type ActorUpdateInput = {
  actedInMovies?: InputMaybe<Array<ActorActedInMoviesUpdateFieldInput>>;
  bio_SET?: InputMaybe<Scalars['String']['input']>;
  bornIn_SET?: InputMaybe<Scalars['String']['input']>;
  born_SET?: InputMaybe<Scalars['Date']['input']>;
  imdbId_SET?: InputMaybe<Scalars['String']['input']>;
  name_SET?: InputMaybe<Scalars['String']['input']>;
  poster_SET?: InputMaybe<Scalars['String']['input']>;
  tmdbId_SET?: InputMaybe<Scalars['String']['input']>;
  url_SET?: InputMaybe<Scalars['String']['input']>;
};

export type ActorWhere = {
  AND?: InputMaybe<Array<ActorWhere>>;
  NOT?: InputMaybe<ActorWhere>;
  OR?: InputMaybe<Array<ActorWhere>>;
  actedInMoviesAggregate?: InputMaybe<ActorActedInMoviesAggregateInput>;
  /** Return Actors where all of the related ActorActedInMoviesConnections match this filter */
  actedInMoviesConnection_ALL?: InputMaybe<ActorActedInMoviesConnectionWhere>;
  /** Return Actors where none of the related ActorActedInMoviesConnections match this filter */
  actedInMoviesConnection_NONE?: InputMaybe<ActorActedInMoviesConnectionWhere>;
  /** Return Actors where one of the related ActorActedInMoviesConnections match this filter */
  actedInMoviesConnection_SINGLE?: InputMaybe<ActorActedInMoviesConnectionWhere>;
  /** Return Actors where some of the related ActorActedInMoviesConnections match this filter */
  actedInMoviesConnection_SOME?: InputMaybe<ActorActedInMoviesConnectionWhere>;
  /** Return Actors where all of the related Movies match this filter */
  actedInMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return Actors where none of the related Movies match this filter */
  actedInMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return Actors where one of the related Movies match this filter */
  actedInMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Actors where some of the related Movies match this filter */
  actedInMovies_SOME?: InputMaybe<MovieWhere>;
  bio_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bio_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bio_EQ?: InputMaybe<Scalars['String']['input']>;
  bio_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  bio_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  bornIn_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bornIn_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bornIn_EQ?: InputMaybe<Scalars['String']['input']>;
  bornIn_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  bornIn_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  born_EQ?: InputMaybe<Scalars['Date']['input']>;
  born_GT?: InputMaybe<Scalars['Date']['input']>;
  born_GTE?: InputMaybe<Scalars['Date']['input']>;
  born_IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  born_LT?: InputMaybe<Scalars['Date']['input']>;
  born_LTE?: InputMaybe<Scalars['Date']['input']>;
  imdbId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  imdbId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  imdbId_EQ?: InputMaybe<Scalars['String']['input']>;
  imdbId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  imdbId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_EQ?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  poster_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  poster_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  poster_EQ?: InputMaybe<Scalars['String']['input']>;
  poster_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  poster_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  tmdbId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  tmdbId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  tmdbId_EQ?: InputMaybe<Scalars['String']['input']>;
  tmdbId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  tmdbId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_EQ?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ActorsConnection = {
  __typename?: 'ActorsConnection';
  edges: Array<ActorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BigIntAggregateSelection = {
  __typename?: 'BigIntAggregateSelection';
  average?: Maybe<Scalars['BigInt']['output']>;
  max?: Maybe<Scalars['BigInt']['output']>;
  min?: Maybe<Scalars['BigInt']['output']>;
  sum?: Maybe<Scalars['BigInt']['output']>;
};

export type CreateActorsMutationResponse = {
  __typename?: 'CreateActorsMutationResponse';
  actors: Array<Actor>;
  info: CreateInfo;
};

export type CreateDirectorsMutationResponse = {
  __typename?: 'CreateDirectorsMutationResponse';
  directors: Array<Director>;
  info: CreateInfo;
};

export type CreateGenresMutationResponse = {
  __typename?: 'CreateGenresMutationResponse';
  genres: Array<Genre>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMoviesMutationResponse = {
  __typename?: 'CreateMoviesMutationResponse';
  info: CreateInfo;
  movies: Array<Movie>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Director = {
  __typename?: 'Director';
  bio: Scalars['String']['output'];
  born: Scalars['Date']['output'];
  bornIn: Scalars['String']['output'];
  directedMovies: Array<Movie>;
  directedMoviesAggregate?: Maybe<DirectorMovieDirectedMoviesAggregationSelection>;
  directedMoviesConnection: DirectorDirectedMoviesConnection;
  imdbId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  poster: Scalars['String']['output'];
  tmdbId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type DirectorDirectedMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieSort>>;
  where?: InputMaybe<MovieWhere>;
};

export type DirectorDirectedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type DirectorDirectedMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DirectorDirectedMoviesConnectionSort>>;
  where?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
};

export type DirectorAggregateSelection = {
  __typename?: 'DirectorAggregateSelection';
  bio: StringAggregateSelection;
  bornIn: StringAggregateSelection;
  count: Scalars['Int']['output'];
  imdbId: StringAggregateSelection;
  name: StringAggregateSelection;
  poster: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type DirectorConnectInput = {
  directedMovies?: InputMaybe<Array<DirectorDirectedMoviesConnectFieldInput>>;
};

export type DirectorConnectWhere = {
  node: DirectorWhere;
};

export type DirectorCreateInput = {
  bio: Scalars['String']['input'];
  born: Scalars['Date']['input'];
  bornIn: Scalars['String']['input'];
  directedMovies?: InputMaybe<DirectorDirectedMoviesFieldInput>;
  imdbId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  poster: Scalars['String']['input'];
  tmdbId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type DirectorDeleteInput = {
  directedMovies?: InputMaybe<Array<DirectorDirectedMoviesDeleteFieldInput>>;
};

export type DirectorDirectedMoviesAggregateInput = {
  AND?: InputMaybe<Array<DirectorDirectedMoviesAggregateInput>>;
  NOT?: InputMaybe<DirectorDirectedMoviesAggregateInput>;
  OR?: InputMaybe<Array<DirectorDirectedMoviesAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DirectorDirectedMoviesNodeAggregationWhereInput>;
};

export type DirectorDirectedMoviesConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  where?: InputMaybe<MovieConnectWhere>;
};

export type DirectorDirectedMoviesConnection = {
  __typename?: 'DirectorDirectedMoviesConnection';
  edges: Array<DirectorDirectedMoviesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DirectorDirectedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type DirectorDirectedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<DirectorDirectedMoviesConnectionWhere>>;
  NOT?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
  OR?: InputMaybe<Array<DirectorDirectedMoviesConnectionWhere>>;
  node?: InputMaybe<MovieWhere>;
};

export type DirectorDirectedMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type DirectorDirectedMoviesDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
};

export type DirectorDirectedMoviesDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
};

export type DirectorDirectedMoviesFieldInput = {
  connect?: InputMaybe<Array<DirectorDirectedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<DirectorDirectedMoviesCreateFieldInput>>;
};

export type DirectorDirectedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DirectorDirectedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DirectorDirectedMoviesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DirectorDirectedMoviesNodeAggregationWhereInput>>;
  imdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  plot_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  plot_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  released_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  revenue_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DirectorDirectedMoviesRelationship = {
  __typename?: 'DirectorDirectedMoviesRelationship';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type DirectorDirectedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type DirectorDirectedMoviesUpdateFieldInput = {
  connect?: InputMaybe<Array<DirectorDirectedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<DirectorDirectedMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<DirectorDirectedMoviesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DirectorDirectedMoviesDisconnectFieldInput>>;
  update?: InputMaybe<DirectorDirectedMoviesUpdateConnectionInput>;
  where?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
};

export type DirectorDisconnectInput = {
  directedMovies?: InputMaybe<
    Array<DirectorDirectedMoviesDisconnectFieldInput>
  >;
};

export type DirectorEdge = {
  __typename?: 'DirectorEdge';
  cursor: Scalars['String']['output'];
  node: Director;
};

export type DirectorMovieDirectedMoviesAggregationSelection = {
  __typename?: 'DirectorMovieDirectedMoviesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DirectorMovieDirectedMoviesNodeAggregateSelection>;
};

export type DirectorMovieDirectedMoviesNodeAggregateSelection = {
  __typename?: 'DirectorMovieDirectedMoviesNodeAggregateSelection';
  imdbId: StringAggregateSelection;
  imdbRating: FloatAggregateSelection;
  imdbVotes: BigIntAggregateSelection;
  plot: StringAggregateSelection;
  poster: StringAggregateSelection;
  releaseDate: StringAggregateSelection;
  released: StringAggregateSelection;
  revenue: BigIntAggregateSelection;
  runtime: BigIntAggregateSelection;
  title: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
  year: BigIntAggregateSelection;
};

export type DirectorOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DirectorSort objects to sort Directors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DirectorSort>>;
};

/** Fields to sort Directors by. The order in which sorts are applied is not guaranteed when specifying many fields in one DirectorSort object. */
export type DirectorSort = {
  bio?: InputMaybe<SortDirection>;
  born?: InputMaybe<SortDirection>;
  bornIn?: InputMaybe<SortDirection>;
  imdbId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  poster?: InputMaybe<SortDirection>;
  tmdbId?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type DirectorUpdateInput = {
  bio_SET?: InputMaybe<Scalars['String']['input']>;
  bornIn_SET?: InputMaybe<Scalars['String']['input']>;
  born_SET?: InputMaybe<Scalars['Date']['input']>;
  directedMovies?: InputMaybe<Array<DirectorDirectedMoviesUpdateFieldInput>>;
  imdbId_SET?: InputMaybe<Scalars['String']['input']>;
  name_SET?: InputMaybe<Scalars['String']['input']>;
  poster_SET?: InputMaybe<Scalars['String']['input']>;
  tmdbId_SET?: InputMaybe<Scalars['String']['input']>;
  url_SET?: InputMaybe<Scalars['String']['input']>;
};

export type DirectorWhere = {
  AND?: InputMaybe<Array<DirectorWhere>>;
  NOT?: InputMaybe<DirectorWhere>;
  OR?: InputMaybe<Array<DirectorWhere>>;
  bio_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bio_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bio_EQ?: InputMaybe<Scalars['String']['input']>;
  bio_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  bio_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  bornIn_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bornIn_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bornIn_EQ?: InputMaybe<Scalars['String']['input']>;
  bornIn_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  bornIn_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  born_EQ?: InputMaybe<Scalars['Date']['input']>;
  born_GT?: InputMaybe<Scalars['Date']['input']>;
  born_GTE?: InputMaybe<Scalars['Date']['input']>;
  born_IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  born_LT?: InputMaybe<Scalars['Date']['input']>;
  born_LTE?: InputMaybe<Scalars['Date']['input']>;
  directedMoviesAggregate?: InputMaybe<DirectorDirectedMoviesAggregateInput>;
  /** Return Directors where all of the related DirectorDirectedMoviesConnections match this filter */
  directedMoviesConnection_ALL?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
  /** Return Directors where none of the related DirectorDirectedMoviesConnections match this filter */
  directedMoviesConnection_NONE?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
  /** Return Directors where one of the related DirectorDirectedMoviesConnections match this filter */
  directedMoviesConnection_SINGLE?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
  /** Return Directors where some of the related DirectorDirectedMoviesConnections match this filter */
  directedMoviesConnection_SOME?: InputMaybe<DirectorDirectedMoviesConnectionWhere>;
  /** Return Directors where all of the related Movies match this filter */
  directedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return Directors where none of the related Movies match this filter */
  directedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return Directors where one of the related Movies match this filter */
  directedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Directors where some of the related Movies match this filter */
  directedMovies_SOME?: InputMaybe<MovieWhere>;
  imdbId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  imdbId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  imdbId_EQ?: InputMaybe<Scalars['String']['input']>;
  imdbId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  imdbId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_EQ?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  poster_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  poster_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  poster_EQ?: InputMaybe<Scalars['String']['input']>;
  poster_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  poster_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  tmdbId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  tmdbId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  tmdbId_EQ?: InputMaybe<Scalars['String']['input']>;
  tmdbId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  tmdbId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_EQ?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type DirectorsConnection = {
  __typename?: 'DirectorsConnection';
  edges: Array<DirectorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FloatAggregateSelection = {
  __typename?: 'FloatAggregateSelection';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

export type Genre = {
  __typename?: 'Genre';
  moviesInGenre: Array<Movie>;
  moviesInGenreAggregate?: Maybe<GenreMovieMoviesInGenreAggregationSelection>;
  moviesInGenreConnection: GenreMoviesInGenreConnection;
  name: Scalars['String']['output'];
};

export type GenreMoviesInGenreArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieSort>>;
  where?: InputMaybe<MovieWhere>;
};

export type GenreMoviesInGenreAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type GenreMoviesInGenreConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GenreMoviesInGenreConnectionSort>>;
  where?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
};

export type GenreAggregateSelection = {
  __typename?: 'GenreAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelection;
};

export type GenreConnectInput = {
  moviesInGenre?: InputMaybe<Array<GenreMoviesInGenreConnectFieldInput>>;
};

export type GenreConnectWhere = {
  node: GenreWhere;
};

export type GenreCreateInput = {
  moviesInGenre?: InputMaybe<GenreMoviesInGenreFieldInput>;
  name: Scalars['String']['input'];
};

export type GenreDeleteInput = {
  moviesInGenre?: InputMaybe<Array<GenreMoviesInGenreDeleteFieldInput>>;
};

export type GenreDisconnectInput = {
  moviesInGenre?: InputMaybe<Array<GenreMoviesInGenreDisconnectFieldInput>>;
};

export type GenreEdge = {
  __typename?: 'GenreEdge';
  cursor: Scalars['String']['output'];
  node: Genre;
};

export type GenreMovieMoviesInGenreAggregationSelection = {
  __typename?: 'GenreMovieMoviesInGenreAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<GenreMovieMoviesInGenreNodeAggregateSelection>;
};

export type GenreMovieMoviesInGenreNodeAggregateSelection = {
  __typename?: 'GenreMovieMoviesInGenreNodeAggregateSelection';
  imdbId: StringAggregateSelection;
  imdbRating: FloatAggregateSelection;
  imdbVotes: BigIntAggregateSelection;
  plot: StringAggregateSelection;
  poster: StringAggregateSelection;
  releaseDate: StringAggregateSelection;
  released: StringAggregateSelection;
  revenue: BigIntAggregateSelection;
  runtime: BigIntAggregateSelection;
  title: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
  year: BigIntAggregateSelection;
};

export type GenreMoviesInGenreAggregateInput = {
  AND?: InputMaybe<Array<GenreMoviesInGenreAggregateInput>>;
  NOT?: InputMaybe<GenreMoviesInGenreAggregateInput>;
  OR?: InputMaybe<Array<GenreMoviesInGenreAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<GenreMoviesInGenreNodeAggregationWhereInput>;
};

export type GenreMoviesInGenreConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  where?: InputMaybe<MovieConnectWhere>;
};

export type GenreMoviesInGenreConnection = {
  __typename?: 'GenreMoviesInGenreConnection';
  edges: Array<GenreMoviesInGenreRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GenreMoviesInGenreConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type GenreMoviesInGenreConnectionWhere = {
  AND?: InputMaybe<Array<GenreMoviesInGenreConnectionWhere>>;
  NOT?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
  OR?: InputMaybe<Array<GenreMoviesInGenreConnectionWhere>>;
  node?: InputMaybe<MovieWhere>;
};

export type GenreMoviesInGenreCreateFieldInput = {
  node: MovieCreateInput;
};

export type GenreMoviesInGenreDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
};

export type GenreMoviesInGenreDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
};

export type GenreMoviesInGenreFieldInput = {
  connect?: InputMaybe<Array<GenreMoviesInGenreConnectFieldInput>>;
  create?: InputMaybe<Array<GenreMoviesInGenreCreateFieldInput>>;
};

export type GenreMoviesInGenreNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GenreMoviesInGenreNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GenreMoviesInGenreNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<GenreMoviesInGenreNodeAggregationWhereInput>>;
  imdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  plot_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  plot_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  released_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  revenue_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GenreMoviesInGenreRelationship = {
  __typename?: 'GenreMoviesInGenreRelationship';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type GenreMoviesInGenreUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type GenreMoviesInGenreUpdateFieldInput = {
  connect?: InputMaybe<Array<GenreMoviesInGenreConnectFieldInput>>;
  create?: InputMaybe<Array<GenreMoviesInGenreCreateFieldInput>>;
  delete?: InputMaybe<Array<GenreMoviesInGenreDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GenreMoviesInGenreDisconnectFieldInput>>;
  update?: InputMaybe<GenreMoviesInGenreUpdateConnectionInput>;
  where?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
};

export type GenreOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more GenreSort objects to sort Genres by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GenreSort>>;
};

/** Fields to sort Genres by. The order in which sorts are applied is not guaranteed when specifying many fields in one GenreSort object. */
export type GenreSort = {
  name?: InputMaybe<SortDirection>;
};

export type GenreUpdateInput = {
  moviesInGenre?: InputMaybe<Array<GenreMoviesInGenreUpdateFieldInput>>;
  name_SET?: InputMaybe<Scalars['String']['input']>;
};

export type GenreWhere = {
  AND?: InputMaybe<Array<GenreWhere>>;
  NOT?: InputMaybe<GenreWhere>;
  OR?: InputMaybe<Array<GenreWhere>>;
  moviesInGenreAggregate?: InputMaybe<GenreMoviesInGenreAggregateInput>;
  /** Return Genres where all of the related GenreMoviesInGenreConnections match this filter */
  moviesInGenreConnection_ALL?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
  /** Return Genres where none of the related GenreMoviesInGenreConnections match this filter */
  moviesInGenreConnection_NONE?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
  /** Return Genres where one of the related GenreMoviesInGenreConnections match this filter */
  moviesInGenreConnection_SINGLE?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
  /** Return Genres where some of the related GenreMoviesInGenreConnections match this filter */
  moviesInGenreConnection_SOME?: InputMaybe<GenreMoviesInGenreConnectionWhere>;
  /** Return Genres where all of the related Movies match this filter */
  moviesInGenre_ALL?: InputMaybe<MovieWhere>;
  /** Return Genres where none of the related Movies match this filter */
  moviesInGenre_NONE?: InputMaybe<MovieWhere>;
  /** Return Genres where one of the related Movies match this filter */
  moviesInGenre_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Genres where some of the related Movies match this filter */
  moviesInGenre_SOME?: InputMaybe<MovieWhere>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_EQ?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type GenresConnection = {
  __typename?: 'GenresConnection';
  edges: Array<GenreEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  actors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  actorsActedIn: Array<Actor>;
  actorsActedInAggregate?: Maybe<MovieActorActorsActedInAggregationSelection>;
  actorsActedInConnection: MovieActorsActedInConnection;
  directors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  directorsDirected: Array<Director>;
  directorsDirectedAggregate?: Maybe<MovieDirectorDirectorsDirectedAggregationSelection>;
  directorsDirectedConnection: MovieDirectorsDirectedConnection;
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  imdbId?: Maybe<Scalars['String']['output']>;
  imdbRating?: Maybe<Scalars['Float']['output']>;
  imdbVotes?: Maybe<Scalars['BigInt']['output']>;
  inGenreGenres: Array<Genre>;
  inGenreGenresAggregate?: Maybe<MovieGenreInGenreGenresAggregationSelection>;
  inGenreGenresConnection: MovieInGenreGenresConnection;
  plot?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  released?: Maybe<Scalars['String']['output']>;
  revenue?: Maybe<Scalars['BigInt']['output']>;
  runtime?: Maybe<Scalars['BigInt']['output']>;
  title: Scalars['String']['output'];
  tmdbId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  usersRated: Array<User>;
  usersRatedAggregate?: Maybe<MovieUserUsersRatedAggregationSelection>;
  usersRatedConnection: MovieUsersRatedConnection;
  year?: Maybe<Scalars['BigInt']['output']>;
};

export type MovieActorsActedInArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ActorSort>>;
  where?: InputMaybe<ActorWhere>;
};

export type MovieActorsActedInAggregateArgs = {
  where?: InputMaybe<ActorWhere>;
};

export type MovieActorsActedInConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieActorsActedInConnectionSort>>;
  where?: InputMaybe<MovieActorsActedInConnectionWhere>;
};

export type MovieDirectorsDirectedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DirectorSort>>;
  where?: InputMaybe<DirectorWhere>;
};

export type MovieDirectorsDirectedAggregateArgs = {
  where?: InputMaybe<DirectorWhere>;
};

export type MovieDirectorsDirectedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieDirectorsDirectedConnectionSort>>;
  where?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
};

export type MovieInGenreGenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GenreSort>>;
  where?: InputMaybe<GenreWhere>;
};

export type MovieInGenreGenresAggregateArgs = {
  where?: InputMaybe<GenreWhere>;
};

export type MovieInGenreGenresConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieInGenreGenresConnectionSort>>;
  where?: InputMaybe<MovieInGenreGenresConnectionWhere>;
};

export type MovieUsersRatedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  where?: InputMaybe<UserWhere>;
};

export type MovieUsersRatedAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MovieUsersRatedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieUsersRatedConnectionSort>>;
  where?: InputMaybe<MovieUsersRatedConnectionWhere>;
};

export type MovieActorActorsActedInAggregationSelection = {
  __typename?: 'MovieActorActorsActedInAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<MovieActorActorsActedInEdgeAggregateSelection>;
  node?: Maybe<MovieActorActorsActedInNodeAggregateSelection>;
};

export type MovieActorActorsActedInEdgeAggregateSelection = {
  __typename?: 'MovieActorActorsActedInEdgeAggregateSelection';
  role: StringAggregateSelection;
};

export type MovieActorActorsActedInNodeAggregateSelection = {
  __typename?: 'MovieActorActorsActedInNodeAggregateSelection';
  bio: StringAggregateSelection;
  bornIn: StringAggregateSelection;
  imdbId: StringAggregateSelection;
  name: StringAggregateSelection;
  poster: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type MovieActorsActedInAggregateInput = {
  AND?: InputMaybe<Array<MovieActorsActedInAggregateInput>>;
  NOT?: InputMaybe<MovieActorsActedInAggregateInput>;
  OR?: InputMaybe<Array<MovieActorsActedInAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ActedInPropertiesAggregationWhereInput>;
  node?: InputMaybe<MovieActorsActedInNodeAggregationWhereInput>;
};

export type MovieActorsActedInConnectFieldInput = {
  connect?: InputMaybe<Array<ActorConnectInput>>;
  edge: ActedInPropertiesCreateInput;
  where?: InputMaybe<ActorConnectWhere>;
};

export type MovieActorsActedInConnection = {
  __typename?: 'MovieActorsActedInConnection';
  edges: Array<MovieActorsActedInRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieActorsActedInConnectionSort = {
  edge?: InputMaybe<ActedInPropertiesSort>;
  node?: InputMaybe<ActorSort>;
};

export type MovieActorsActedInConnectionWhere = {
  AND?: InputMaybe<Array<MovieActorsActedInConnectionWhere>>;
  NOT?: InputMaybe<MovieActorsActedInConnectionWhere>;
  OR?: InputMaybe<Array<MovieActorsActedInConnectionWhere>>;
  edge?: InputMaybe<ActedInPropertiesWhere>;
  node?: InputMaybe<ActorWhere>;
};

export type MovieActorsActedInCreateFieldInput = {
  edge: ActedInPropertiesCreateInput;
  node: ActorCreateInput;
};

export type MovieActorsActedInDeleteFieldInput = {
  delete?: InputMaybe<ActorDeleteInput>;
  where?: InputMaybe<MovieActorsActedInConnectionWhere>;
};

export type MovieActorsActedInDisconnectFieldInput = {
  disconnect?: InputMaybe<ActorDisconnectInput>;
  where?: InputMaybe<MovieActorsActedInConnectionWhere>;
};

export type MovieActorsActedInFieldInput = {
  connect?: InputMaybe<Array<MovieActorsActedInConnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsActedInCreateFieldInput>>;
};

export type MovieActorsActedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieActorsActedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieActorsActedInNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieActorsActedInNodeAggregationWhereInput>>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bornIn_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MovieActorsActedInRelationship = {
  __typename?: 'MovieActorsActedInRelationship';
  cursor: Scalars['String']['output'];
  node: Actor;
  properties: ActedInProperties;
};

export type MovieActorsActedInUpdateConnectionInput = {
  edge?: InputMaybe<ActedInPropertiesUpdateInput>;
  node?: InputMaybe<ActorUpdateInput>;
};

export type MovieActorsActedInUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieActorsActedInConnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsActedInCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieActorsActedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieActorsActedInDisconnectFieldInput>>;
  update?: InputMaybe<MovieActorsActedInUpdateConnectionInput>;
  where?: InputMaybe<MovieActorsActedInConnectionWhere>;
};

export type MovieAggregateSelection = {
  __typename?: 'MovieAggregateSelection';
  count: Scalars['Int']['output'];
  imdbId: StringAggregateSelection;
  imdbRating: FloatAggregateSelection;
  imdbVotes: BigIntAggregateSelection;
  plot: StringAggregateSelection;
  poster: StringAggregateSelection;
  releaseDate: StringAggregateSelection;
  released: StringAggregateSelection;
  revenue: BigIntAggregateSelection;
  runtime: BigIntAggregateSelection;
  title: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
  year: BigIntAggregateSelection;
};

export type MovieConnectInput = {
  actorsActedIn?: InputMaybe<Array<MovieActorsActedInConnectFieldInput>>;
  directorsDirected?: InputMaybe<
    Array<MovieDirectorsDirectedConnectFieldInput>
  >;
  inGenreGenres?: InputMaybe<Array<MovieInGenreGenresConnectFieldInput>>;
  usersRated?: InputMaybe<Array<MovieUsersRatedConnectFieldInput>>;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  actors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  actorsActedIn?: InputMaybe<MovieActorsActedInFieldInput>;
  directors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  directorsDirected?: InputMaybe<MovieDirectorsDirectedFieldInput>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imdbId?: InputMaybe<Scalars['String']['input']>;
  imdbRating?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes?: InputMaybe<Scalars['BigInt']['input']>;
  inGenreGenres?: InputMaybe<MovieInGenreGenresFieldInput>;
  plot?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  releaseDate?: InputMaybe<Scalars['String']['input']>;
  released?: InputMaybe<Scalars['String']['input']>;
  revenue?: InputMaybe<Scalars['BigInt']['input']>;
  runtime?: InputMaybe<Scalars['BigInt']['input']>;
  title: Scalars['String']['input'];
  tmdbId?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  usersRated?: InputMaybe<MovieUsersRatedFieldInput>;
  year?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MovieDeleteInput = {
  actorsActedIn?: InputMaybe<Array<MovieActorsActedInDeleteFieldInput>>;
  directorsDirected?: InputMaybe<Array<MovieDirectorsDirectedDeleteFieldInput>>;
  inGenreGenres?: InputMaybe<Array<MovieInGenreGenresDeleteFieldInput>>;
  usersRated?: InputMaybe<Array<MovieUsersRatedDeleteFieldInput>>;
};

export type MovieDirectorDirectorsDirectedAggregationSelection = {
  __typename?: 'MovieDirectorDirectorsDirectedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MovieDirectorDirectorsDirectedNodeAggregateSelection>;
};

export type MovieDirectorDirectorsDirectedNodeAggregateSelection = {
  __typename?: 'MovieDirectorDirectorsDirectedNodeAggregateSelection';
  bio: StringAggregateSelection;
  bornIn: StringAggregateSelection;
  imdbId: StringAggregateSelection;
  name: StringAggregateSelection;
  poster: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type MovieDirectorsDirectedAggregateInput = {
  AND?: InputMaybe<Array<MovieDirectorsDirectedAggregateInput>>;
  NOT?: InputMaybe<MovieDirectorsDirectedAggregateInput>;
  OR?: InputMaybe<Array<MovieDirectorsDirectedAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MovieDirectorsDirectedNodeAggregationWhereInput>;
};

export type MovieDirectorsDirectedConnectFieldInput = {
  connect?: InputMaybe<Array<DirectorConnectInput>>;
  where?: InputMaybe<DirectorConnectWhere>;
};

export type MovieDirectorsDirectedConnection = {
  __typename?: 'MovieDirectorsDirectedConnection';
  edges: Array<MovieDirectorsDirectedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieDirectorsDirectedConnectionSort = {
  node?: InputMaybe<DirectorSort>;
};

export type MovieDirectorsDirectedConnectionWhere = {
  AND?: InputMaybe<Array<MovieDirectorsDirectedConnectionWhere>>;
  NOT?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
  OR?: InputMaybe<Array<MovieDirectorsDirectedConnectionWhere>>;
  node?: InputMaybe<DirectorWhere>;
};

export type MovieDirectorsDirectedCreateFieldInput = {
  node: DirectorCreateInput;
};

export type MovieDirectorsDirectedDeleteFieldInput = {
  delete?: InputMaybe<DirectorDeleteInput>;
  where?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
};

export type MovieDirectorsDirectedDisconnectFieldInput = {
  disconnect?: InputMaybe<DirectorDisconnectInput>;
  where?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
};

export type MovieDirectorsDirectedFieldInput = {
  connect?: InputMaybe<Array<MovieDirectorsDirectedConnectFieldInput>>;
  create?: InputMaybe<Array<MovieDirectorsDirectedCreateFieldInput>>;
};

export type MovieDirectorsDirectedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieDirectorsDirectedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieDirectorsDirectedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieDirectorsDirectedNodeAggregationWhereInput>>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bornIn_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bornIn_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bornIn_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MovieDirectorsDirectedRelationship = {
  __typename?: 'MovieDirectorsDirectedRelationship';
  cursor: Scalars['String']['output'];
  node: Director;
};

export type MovieDirectorsDirectedUpdateConnectionInput = {
  node?: InputMaybe<DirectorUpdateInput>;
};

export type MovieDirectorsDirectedUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieDirectorsDirectedConnectFieldInput>>;
  create?: InputMaybe<Array<MovieDirectorsDirectedCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieDirectorsDirectedDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieDirectorsDirectedDisconnectFieldInput>>;
  update?: InputMaybe<MovieDirectorsDirectedUpdateConnectionInput>;
  where?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
};

export type MovieDisconnectInput = {
  actorsActedIn?: InputMaybe<Array<MovieActorsActedInDisconnectFieldInput>>;
  directorsDirected?: InputMaybe<
    Array<MovieDirectorsDirectedDisconnectFieldInput>
  >;
  inGenreGenres?: InputMaybe<Array<MovieInGenreGenresDisconnectFieldInput>>;
  usersRated?: InputMaybe<Array<MovieUsersRatedDisconnectFieldInput>>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type MovieGenreInGenreGenresAggregationSelection = {
  __typename?: 'MovieGenreInGenreGenresAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MovieGenreInGenreGenresNodeAggregateSelection>;
};

export type MovieGenreInGenreGenresNodeAggregateSelection = {
  __typename?: 'MovieGenreInGenreGenresNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type MovieInGenreGenresAggregateInput = {
  AND?: InputMaybe<Array<MovieInGenreGenresAggregateInput>>;
  NOT?: InputMaybe<MovieInGenreGenresAggregateInput>;
  OR?: InputMaybe<Array<MovieInGenreGenresAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MovieInGenreGenresNodeAggregationWhereInput>;
};

export type MovieInGenreGenresConnectFieldInput = {
  connect?: InputMaybe<Array<GenreConnectInput>>;
  where?: InputMaybe<GenreConnectWhere>;
};

export type MovieInGenreGenresConnection = {
  __typename?: 'MovieInGenreGenresConnection';
  edges: Array<MovieInGenreGenresRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieInGenreGenresConnectionSort = {
  node?: InputMaybe<GenreSort>;
};

export type MovieInGenreGenresConnectionWhere = {
  AND?: InputMaybe<Array<MovieInGenreGenresConnectionWhere>>;
  NOT?: InputMaybe<MovieInGenreGenresConnectionWhere>;
  OR?: InputMaybe<Array<MovieInGenreGenresConnectionWhere>>;
  node?: InputMaybe<GenreWhere>;
};

export type MovieInGenreGenresCreateFieldInput = {
  node: GenreCreateInput;
};

export type MovieInGenreGenresDeleteFieldInput = {
  delete?: InputMaybe<GenreDeleteInput>;
  where?: InputMaybe<MovieInGenreGenresConnectionWhere>;
};

export type MovieInGenreGenresDisconnectFieldInput = {
  disconnect?: InputMaybe<GenreDisconnectInput>;
  where?: InputMaybe<MovieInGenreGenresConnectionWhere>;
};

export type MovieInGenreGenresFieldInput = {
  connect?: InputMaybe<Array<MovieInGenreGenresConnectFieldInput>>;
  create?: InputMaybe<Array<MovieInGenreGenresCreateFieldInput>>;
};

export type MovieInGenreGenresNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieInGenreGenresNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieInGenreGenresNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieInGenreGenresNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MovieInGenreGenresRelationship = {
  __typename?: 'MovieInGenreGenresRelationship';
  cursor: Scalars['String']['output'];
  node: Genre;
};

export type MovieInGenreGenresUpdateConnectionInput = {
  node?: InputMaybe<GenreUpdateInput>;
};

export type MovieInGenreGenresUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieInGenreGenresConnectFieldInput>>;
  create?: InputMaybe<Array<MovieInGenreGenresCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieInGenreGenresDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieInGenreGenresDisconnectFieldInput>>;
  update?: InputMaybe<MovieInGenreGenresUpdateConnectionInput>;
  where?: InputMaybe<MovieInGenreGenresConnectionWhere>;
};

export type MovieOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  imdbId?: InputMaybe<SortDirection>;
  imdbRating?: InputMaybe<SortDirection>;
  imdbVotes?: InputMaybe<SortDirection>;
  plot?: InputMaybe<SortDirection>;
  poster?: InputMaybe<SortDirection>;
  releaseDate?: InputMaybe<SortDirection>;
  released?: InputMaybe<SortDirection>;
  revenue?: InputMaybe<SortDirection>;
  runtime?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  tmdbId?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  year?: InputMaybe<SortDirection>;
};

export type MovieUpdateInput = {
  actorsActedIn?: InputMaybe<Array<MovieActorsActedInUpdateFieldInput>>;
  actors_POP?: InputMaybe<Scalars['Int']['input']>;
  actors_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  actors_SET?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  directorsDirected?: InputMaybe<Array<MovieDirectorsDirectedUpdateFieldInput>>;
  directors_POP?: InputMaybe<Scalars['Int']['input']>;
  directors_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  directors_SET?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genres_POP?: InputMaybe<Scalars['Int']['input']>;
  genres_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genres_SET?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imdbId_SET?: InputMaybe<Scalars['String']['input']>;
  imdbRating_ADD?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SET?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SET?: InputMaybe<Scalars['BigInt']['input']>;
  inGenreGenres?: InputMaybe<Array<MovieInGenreGenresUpdateFieldInput>>;
  plot_SET?: InputMaybe<Scalars['String']['input']>;
  poster_SET?: InputMaybe<Scalars['String']['input']>;
  releaseDate_SET?: InputMaybe<Scalars['String']['input']>;
  released_SET?: InputMaybe<Scalars['String']['input']>;
  revenue_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SET?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SET?: InputMaybe<Scalars['BigInt']['input']>;
  title_SET?: InputMaybe<Scalars['String']['input']>;
  tmdbId_SET?: InputMaybe<Scalars['String']['input']>;
  url_SET?: InputMaybe<Scalars['String']['input']>;
  usersRated?: InputMaybe<Array<MovieUsersRatedUpdateFieldInput>>;
  year_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  year_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SET?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MovieUserUsersRatedAggregationSelection = {
  __typename?: 'MovieUserUsersRatedAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<MovieUserUsersRatedEdgeAggregateSelection>;
  node?: Maybe<MovieUserUsersRatedNodeAggregateSelection>;
};

export type MovieUserUsersRatedEdgeAggregateSelection = {
  __typename?: 'MovieUserUsersRatedEdgeAggregateSelection';
  rating: FloatAggregateSelection;
  timestamp: BigIntAggregateSelection;
};

export type MovieUserUsersRatedNodeAggregateSelection = {
  __typename?: 'MovieUserUsersRatedNodeAggregateSelection';
  name: StringAggregateSelection;
  userId: StringAggregateSelection;
};

export type MovieUsersRatedAggregateInput = {
  AND?: InputMaybe<Array<MovieUsersRatedAggregateInput>>;
  NOT?: InputMaybe<MovieUsersRatedAggregateInput>;
  OR?: InputMaybe<Array<MovieUsersRatedAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<RatedPropertiesAggregationWhereInput>;
  node?: InputMaybe<MovieUsersRatedNodeAggregationWhereInput>;
};

export type MovieUsersRatedConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: RatedPropertiesCreateInput;
  where?: InputMaybe<UserConnectWhere>;
};

export type MovieUsersRatedConnection = {
  __typename?: 'MovieUsersRatedConnection';
  edges: Array<MovieUsersRatedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieUsersRatedConnectionSort = {
  edge?: InputMaybe<RatedPropertiesSort>;
  node?: InputMaybe<UserSort>;
};

export type MovieUsersRatedConnectionWhere = {
  AND?: InputMaybe<Array<MovieUsersRatedConnectionWhere>>;
  NOT?: InputMaybe<MovieUsersRatedConnectionWhere>;
  OR?: InputMaybe<Array<MovieUsersRatedConnectionWhere>>;
  edge?: InputMaybe<RatedPropertiesWhere>;
  node?: InputMaybe<UserWhere>;
};

export type MovieUsersRatedCreateFieldInput = {
  edge: RatedPropertiesCreateInput;
  node: UserCreateInput;
};

export type MovieUsersRatedDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<MovieUsersRatedConnectionWhere>;
};

export type MovieUsersRatedDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<MovieUsersRatedConnectionWhere>;
};

export type MovieUsersRatedFieldInput = {
  connect?: InputMaybe<Array<MovieUsersRatedConnectFieldInput>>;
  create?: InputMaybe<Array<MovieUsersRatedCreateFieldInput>>;
};

export type MovieUsersRatedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieUsersRatedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieUsersRatedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieUsersRatedNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  userId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  userId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  userId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  userId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  userId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  userId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  userId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  userId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  userId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  userId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  userId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  userId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  userId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  userId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  userId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MovieUsersRatedRelationship = {
  __typename?: 'MovieUsersRatedRelationship';
  cursor: Scalars['String']['output'];
  node: User;
  properties: RatedProperties;
};

export type MovieUsersRatedUpdateConnectionInput = {
  edge?: InputMaybe<RatedPropertiesUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type MovieUsersRatedUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieUsersRatedConnectFieldInput>>;
  create?: InputMaybe<Array<MovieUsersRatedCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieUsersRatedDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieUsersRatedDisconnectFieldInput>>;
  update?: InputMaybe<MovieUsersRatedUpdateConnectionInput>;
  where?: InputMaybe<MovieUsersRatedConnectionWhere>;
};

export type MovieWhere = {
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  OR?: InputMaybe<Array<MovieWhere>>;
  actorsActedInAggregate?: InputMaybe<MovieActorsActedInAggregateInput>;
  /** Return Movies where all of the related MovieActorsActedInConnections match this filter */
  actorsActedInConnection_ALL?: InputMaybe<MovieActorsActedInConnectionWhere>;
  /** Return Movies where none of the related MovieActorsActedInConnections match this filter */
  actorsActedInConnection_NONE?: InputMaybe<MovieActorsActedInConnectionWhere>;
  /** Return Movies where one of the related MovieActorsActedInConnections match this filter */
  actorsActedInConnection_SINGLE?: InputMaybe<MovieActorsActedInConnectionWhere>;
  /** Return Movies where some of the related MovieActorsActedInConnections match this filter */
  actorsActedInConnection_SOME?: InputMaybe<MovieActorsActedInConnectionWhere>;
  /** Return Movies where all of the related Actors match this filter */
  actorsActedIn_ALL?: InputMaybe<ActorWhere>;
  /** Return Movies where none of the related Actors match this filter */
  actorsActedIn_NONE?: InputMaybe<ActorWhere>;
  /** Return Movies where one of the related Actors match this filter */
  actorsActedIn_SINGLE?: InputMaybe<ActorWhere>;
  /** Return Movies where some of the related Actors match this filter */
  actorsActedIn_SOME?: InputMaybe<ActorWhere>;
  actors_EQ?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  actors_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  directorsDirectedAggregate?: InputMaybe<MovieDirectorsDirectedAggregateInput>;
  /** Return Movies where all of the related MovieDirectorsDirectedConnections match this filter */
  directorsDirectedConnection_ALL?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
  /** Return Movies where none of the related MovieDirectorsDirectedConnections match this filter */
  directorsDirectedConnection_NONE?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
  /** Return Movies where one of the related MovieDirectorsDirectedConnections match this filter */
  directorsDirectedConnection_SINGLE?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
  /** Return Movies where some of the related MovieDirectorsDirectedConnections match this filter */
  directorsDirectedConnection_SOME?: InputMaybe<MovieDirectorsDirectedConnectionWhere>;
  /** Return Movies where all of the related Directors match this filter */
  directorsDirected_ALL?: InputMaybe<DirectorWhere>;
  /** Return Movies where none of the related Directors match this filter */
  directorsDirected_NONE?: InputMaybe<DirectorWhere>;
  /** Return Movies where one of the related Directors match this filter */
  directorsDirected_SINGLE?: InputMaybe<DirectorWhere>;
  /** Return Movies where some of the related Directors match this filter */
  directorsDirected_SOME?: InputMaybe<DirectorWhere>;
  directors_EQ?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  directors_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  genres_EQ?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genres_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  imdbId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  imdbId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  imdbId_EQ?: InputMaybe<Scalars['String']['input']>;
  imdbId_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imdbId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  imdbRating_EQ?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  imdbRating_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes_EQ?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_IN?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  imdbVotes_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  inGenreGenresAggregate?: InputMaybe<MovieInGenreGenresAggregateInput>;
  /** Return Movies where all of the related MovieInGenreGenresConnections match this filter */
  inGenreGenresConnection_ALL?: InputMaybe<MovieInGenreGenresConnectionWhere>;
  /** Return Movies where none of the related MovieInGenreGenresConnections match this filter */
  inGenreGenresConnection_NONE?: InputMaybe<MovieInGenreGenresConnectionWhere>;
  /** Return Movies where one of the related MovieInGenreGenresConnections match this filter */
  inGenreGenresConnection_SINGLE?: InputMaybe<MovieInGenreGenresConnectionWhere>;
  /** Return Movies where some of the related MovieInGenreGenresConnections match this filter */
  inGenreGenresConnection_SOME?: InputMaybe<MovieInGenreGenresConnectionWhere>;
  /** Return Movies where all of the related Genres match this filter */
  inGenreGenres_ALL?: InputMaybe<GenreWhere>;
  /** Return Movies where none of the related Genres match this filter */
  inGenreGenres_NONE?: InputMaybe<GenreWhere>;
  /** Return Movies where one of the related Genres match this filter */
  inGenreGenres_SINGLE?: InputMaybe<GenreWhere>;
  /** Return Movies where some of the related Genres match this filter */
  inGenreGenres_SOME?: InputMaybe<GenreWhere>;
  plot_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  plot_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  plot_EQ?: InputMaybe<Scalars['String']['input']>;
  plot_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  plot_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  poster_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  poster_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  poster_EQ?: InputMaybe<Scalars['String']['input']>;
  poster_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  poster_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  releaseDate_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  releaseDate_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  releaseDate_EQ?: InputMaybe<Scalars['String']['input']>;
  releaseDate_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  releaseDate_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  released_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  released_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  released_EQ?: InputMaybe<Scalars['String']['input']>;
  released_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  released_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  revenue_EQ?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_IN?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  revenue_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_EQ?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_IN?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  runtime_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_EQ?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  tmdbId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  tmdbId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  tmdbId_EQ?: InputMaybe<Scalars['String']['input']>;
  tmdbId_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tmdbId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_EQ?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  usersRatedAggregate?: InputMaybe<MovieUsersRatedAggregateInput>;
  /** Return Movies where all of the related MovieUsersRatedConnections match this filter */
  usersRatedConnection_ALL?: InputMaybe<MovieUsersRatedConnectionWhere>;
  /** Return Movies where none of the related MovieUsersRatedConnections match this filter */
  usersRatedConnection_NONE?: InputMaybe<MovieUsersRatedConnectionWhere>;
  /** Return Movies where one of the related MovieUsersRatedConnections match this filter */
  usersRatedConnection_SINGLE?: InputMaybe<MovieUsersRatedConnectionWhere>;
  /** Return Movies where some of the related MovieUsersRatedConnections match this filter */
  usersRatedConnection_SOME?: InputMaybe<MovieUsersRatedConnectionWhere>;
  /** Return Movies where all of the related Users match this filter */
  usersRated_ALL?: InputMaybe<UserWhere>;
  /** Return Movies where none of the related Users match this filter */
  usersRated_NONE?: InputMaybe<UserWhere>;
  /** Return Movies where one of the related Users match this filter */
  usersRated_SINGLE?: InputMaybe<UserWhere>;
  /** Return Movies where some of the related Users match this filter */
  usersRated_SOME?: InputMaybe<UserWhere>;
  year_EQ?: InputMaybe<Scalars['BigInt']['input']>;
  year_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_IN?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  year_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  edges: Array<MovieEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActors: CreateActorsMutationResponse;
  createDirectors: CreateDirectorsMutationResponse;
  createGenres: CreateGenresMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteActors: DeleteInfo;
  deleteDirectors: DeleteInfo;
  deleteGenres: DeleteInfo;
  deleteMovies: DeleteInfo;
  deleteUsers: DeleteInfo;
  rateMovie?: Maybe<Movie>;
  updateActors: UpdateActorsMutationResponse;
  updateDirectors: UpdateDirectorsMutationResponse;
  updateGenres: UpdateGenresMutationResponse;
  updateMovies: UpdateMoviesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateActorsArgs = {
  input: Array<ActorCreateInput>;
};

export type MutationCreateDirectorsArgs = {
  input: Array<DirectorCreateInput>;
};

export type MutationCreateGenresArgs = {
  input: Array<GenreCreateInput>;
};

export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteActorsArgs = {
  delete?: InputMaybe<ActorDeleteInput>;
  where?: InputMaybe<ActorWhere>;
};

export type MutationDeleteDirectorsArgs = {
  delete?: InputMaybe<DirectorDeleteInput>;
  where?: InputMaybe<DirectorWhere>;
};

export type MutationDeleteGenresArgs = {
  delete?: InputMaybe<GenreDeleteInput>;
  where?: InputMaybe<GenreWhere>;
};

export type MutationDeleteMoviesArgs = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<MovieWhere>;
};

export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};

export type MutationRateMovieArgs = {
  movieTitle: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};

export type MutationUpdateActorsArgs = {
  update?: InputMaybe<ActorUpdateInput>;
  where?: InputMaybe<ActorWhere>;
};

export type MutationUpdateDirectorsArgs = {
  update?: InputMaybe<DirectorUpdateInput>;
  where?: InputMaybe<DirectorWhere>;
};

export type MutationUpdateGenresArgs = {
  update?: InputMaybe<GenreUpdateInput>;
  where?: InputMaybe<GenreWhere>;
};

export type MutationUpdateMoviesArgs = {
  update?: InputMaybe<MovieUpdateInput>;
  where?: InputMaybe<MovieWhere>;
};

export type MutationUpdateUsersArgs = {
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  actors: Array<Actor>;
  actorsAggregate: ActorAggregateSelection;
  actorsConnection: ActorsConnection;
  directors: Array<Director>;
  directorsAggregate: DirectorAggregateSelection;
  directorsConnection: DirectorsConnection;
  genres: Array<Genre>;
  genresAggregate: GenreAggregateSelection;
  genresConnection: GenresConnection;
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesConnection: MoviesConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryActorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ActorSort>>;
  where?: InputMaybe<ActorWhere>;
};

export type QueryActorsAggregateArgs = {
  where?: InputMaybe<ActorWhere>;
};

export type QueryActorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ActorSort>>;
  where?: InputMaybe<ActorWhere>;
};

export type QueryDirectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DirectorSort>>;
  where?: InputMaybe<DirectorWhere>;
};

export type QueryDirectorsAggregateArgs = {
  where?: InputMaybe<DirectorWhere>;
};

export type QueryDirectorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DirectorSort>>;
  where?: InputMaybe<DirectorWhere>;
};

export type QueryGenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GenreSort>>;
  where?: InputMaybe<GenreWhere>;
};

export type QueryGenresAggregateArgs = {
  where?: InputMaybe<GenreWhere>;
};

export type QueryGenresConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GenreSort>>;
  where?: InputMaybe<GenreWhere>;
};

export type QueryMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieSort>>;
  where?: InputMaybe<MovieWhere>;
};

export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type QueryMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieSort>>;
  where?: InputMaybe<MovieWhere>;
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  where?: InputMaybe<UserWhere>;
};

/**
 * The edge properties for the following fields:
 * * Movie.usersRated
 * * User.ratedMovies
 */
export type RatedProperties = {
  __typename?: 'RatedProperties';
  rating: Scalars['Float']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type RatedPropertiesAggregationWhereInput = {
  AND?: InputMaybe<Array<RatedPropertiesAggregationWhereInput>>;
  NOT?: InputMaybe<RatedPropertiesAggregationWhereInput>;
  OR?: InputMaybe<Array<RatedPropertiesAggregationWhereInput>>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  rating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  rating_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rating_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  rating_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  rating_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  rating_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  rating_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rating_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  rating_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  rating_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  rating_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  rating_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rating_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  rating_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  rating_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  rating_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  timestamp_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RatedPropertiesCreateInput = {
  rating: Scalars['Float']['input'];
  timestamp: Scalars['BigInt']['input'];
};

export type RatedPropertiesSort = {
  rating?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
};

export type RatedPropertiesUpdateInput = {
  rating_ADD?: InputMaybe<Scalars['Float']['input']>;
  rating_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  rating_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  rating_SET?: InputMaybe<Scalars['Float']['input']>;
  rating_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  timestamp_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_SET?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RatedPropertiesWhere = {
  AND?: InputMaybe<Array<RatedPropertiesWhere>>;
  NOT?: InputMaybe<RatedPropertiesWhere>;
  OR?: InputMaybe<Array<RatedPropertiesWhere>>;
  rating_EQ?: InputMaybe<Scalars['Float']['input']>;
  rating_GT?: InputMaybe<Scalars['Float']['input']>;
  rating_GTE?: InputMaybe<Scalars['Float']['input']>;
  rating_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  rating_LT?: InputMaybe<Scalars['Float']['input']>;
  rating_LTE?: InputMaybe<Scalars['Float']['input']>;
  timestamp_EQ?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_GT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_LT?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateActorsMutationResponse = {
  __typename?: 'UpdateActorsMutationResponse';
  actors: Array<Actor>;
  info: UpdateInfo;
};

export type UpdateDirectorsMutationResponse = {
  __typename?: 'UpdateDirectorsMutationResponse';
  directors: Array<Director>;
  info: UpdateInfo;
};

export type UpdateGenresMutationResponse = {
  __typename?: 'UpdateGenresMutationResponse';
  genres: Array<Genre>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateMoviesMutationResponse = {
  __typename?: 'UpdateMoviesMutationResponse';
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  name: Scalars['String']['output'];
  ratedMovies: Array<Movie>;
  ratedMoviesAggregate?: Maybe<UserMovieRatedMoviesAggregationSelection>;
  ratedMoviesConnection: UserRatedMoviesConnection;
  userId: Scalars['String']['output'];
};

export type UserRatedMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieSort>>;
  where?: InputMaybe<MovieWhere>;
};

export type UserRatedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type UserRatedMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserRatedMoviesConnectionSort>>;
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelection;
  userId: StringAggregateSelection;
};

export type UserConnectInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  name: Scalars['String']['input'];
  ratedMovies?: InputMaybe<UserRatedMoviesFieldInput>;
  userId: Scalars['String']['input'];
};

export type UserDeleteInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserMovieRatedMoviesAggregationSelection = {
  __typename?: 'UserMovieRatedMoviesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<UserMovieRatedMoviesEdgeAggregateSelection>;
  node?: Maybe<UserMovieRatedMoviesNodeAggregateSelection>;
};

export type UserMovieRatedMoviesEdgeAggregateSelection = {
  __typename?: 'UserMovieRatedMoviesEdgeAggregateSelection';
  rating: FloatAggregateSelection;
  timestamp: BigIntAggregateSelection;
};

export type UserMovieRatedMoviesNodeAggregateSelection = {
  __typename?: 'UserMovieRatedMoviesNodeAggregateSelection';
  imdbId: StringAggregateSelection;
  imdbRating: FloatAggregateSelection;
  imdbVotes: BigIntAggregateSelection;
  plot: StringAggregateSelection;
  poster: StringAggregateSelection;
  releaseDate: StringAggregateSelection;
  released: StringAggregateSelection;
  revenue: BigIntAggregateSelection;
  runtime: BigIntAggregateSelection;
  title: StringAggregateSelection;
  tmdbId: StringAggregateSelection;
  url: StringAggregateSelection;
  year: BigIntAggregateSelection;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRatedMoviesAggregateInput = {
  AND?: InputMaybe<Array<UserRatedMoviesAggregateInput>>;
  NOT?: InputMaybe<UserRatedMoviesAggregateInput>;
  OR?: InputMaybe<Array<UserRatedMoviesAggregateInput>>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<RatedPropertiesAggregationWhereInput>;
  node?: InputMaybe<UserRatedMoviesNodeAggregationWhereInput>;
};

export type UserRatedMoviesConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  edge: RatedPropertiesCreateInput;
  where?: InputMaybe<MovieConnectWhere>;
};

export type UserRatedMoviesConnection = {
  __typename?: 'UserRatedMoviesConnection';
  edges: Array<UserRatedMoviesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserRatedMoviesConnectionSort = {
  edge?: InputMaybe<RatedPropertiesSort>;
  node?: InputMaybe<MovieSort>;
};

export type UserRatedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<UserRatedMoviesConnectionWhere>>;
  NOT?: InputMaybe<UserRatedMoviesConnectionWhere>;
  OR?: InputMaybe<Array<UserRatedMoviesConnectionWhere>>;
  edge?: InputMaybe<RatedPropertiesWhere>;
  node?: InputMaybe<MovieWhere>;
};

export type UserRatedMoviesCreateFieldInput = {
  edge: RatedPropertiesCreateInput;
  node: MovieCreateInput;
};

export type UserRatedMoviesDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
};

export type UserRatedMoviesDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
};

export type UserRatedMoviesFieldInput = {
  connect?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
};

export type UserRatedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRatedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRatedMoviesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserRatedMoviesNodeAggregationWhereInput>>;
  imdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  imdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  imdbRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  imdbRating_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  imdbVotes_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  imdbVotes_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  plot_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  plot_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  plot_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  plot_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  releaseDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  releaseDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  released_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  released_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  released_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  revenue_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  revenue_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  runtime_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  tmdbId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  tmdbId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  year_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UserRatedMoviesRelationship = {
  __typename?: 'UserRatedMoviesRelationship';
  cursor: Scalars['String']['output'];
  node: Movie;
  properties: RatedProperties;
};

export type UserRatedMoviesUpdateConnectionInput = {
  edge?: InputMaybe<RatedPropertiesUpdateInput>;
  node?: InputMaybe<MovieUpdateInput>;
};

export type UserRatedMoviesUpdateFieldInput = {
  connect?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserRatedMoviesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserRatedMoviesDisconnectFieldInput>>;
  update?: InputMaybe<UserRatedMoviesUpdateConnectionInput>;
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  name?: InputMaybe<SortDirection>;
  userId?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  name_SET?: InputMaybe<Scalars['String']['input']>;
  ratedMovies?: InputMaybe<Array<UserRatedMoviesUpdateFieldInput>>;
  userId_SET?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_EQ?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  ratedMoviesAggregate?: InputMaybe<UserRatedMoviesAggregateInput>;
  /** Return Users where all of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_ALL?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where none of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_NONE?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where one of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_SINGLE?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where some of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_SOME?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where all of the related Movies match this filter */
  ratedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return Users where none of the related Movies match this filter */
  ratedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return Users where one of the related Movies match this filter */
  ratedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Users where some of the related Movies match this filter */
  ratedMovies_SOME?: InputMaybe<MovieWhere>;
  userId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  userId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  userId_EQ?: InputMaybe<Scalars['String']['input']>;
  userId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  userId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
