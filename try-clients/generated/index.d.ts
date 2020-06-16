import {
  Client,
  FieldsSelection,
  GraphqlOperation,
  SubscriptionClient,
  ClientOptions,
  SubscriptionClientOptions,
} from 'genql-runtime'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
} from './schema'
export declare const createClient: (
  options?: ClientOptions,
) => Client<
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root
>

export declare const everything: { __scalar: boolean }

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<query_root, fields>

export declare const generateQueryOp: (fields: query_rootRequest) => GraphqlOperation

export type MutationResult<fields extends mutation_rootRequest> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (fields: mutation_rootRequest) => GraphqlOperation

export type SubscriptionResult<fields extends subscription_rootRequest> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (fields: subscription_rootRequest) => GraphqlOperation

import { subscription_rootRequest, subscription_rootObservableChain, subscription_root } from './schema'

export declare const createSubscriptionClient: (
  options?: SubscriptionClientOptions,
) => SubscriptionClient<subscription_rootRequest, subscription_rootObservableChain, subscription_root>