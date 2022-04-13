import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
  /** Built-in scalar representing a date-time with a UTC offset */
  OffsetDateTime: any;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
};

export enum ConjunctionOperator {
  And = 'AND',
  AndNot = 'AND_NOT',
  Or = 'OR',
  OrNot = 'OR_NOT'
}

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  createToken?: Maybe<TokenDto>;
  deleteRole: Scalars['Boolean'];
  deleteRoles: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUsers: Scalars['Boolean'];
  saveRole?: Maybe<RoleEntity>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveUser?: Maybe<UserEntity>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
};


/** Mutation root */
export type MutationCreateTokenArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteRoleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationSaveRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Mutation root */
export type MutationSaveRolesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveUsersArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type PageableList_RoleEntity = {
  __typename?: 'PageableList_RoleEntity';
  result?: Maybe<Array<Maybe<RoleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserEntity = {
  __typename?: 'PageableList_UserEntity';
  result?: Maybe<Array<Maybe<UserEntity>>>;
  total: Scalars['Long'];
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  getRole?: Maybe<RoleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getUser?: Maybe<UserEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  refreshToken?: Maybe<TokenDto>;
};


/** Query root */
export type QueryGetRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Query root */
export type QueryGetRolesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Query root */
export type QueryGetUsersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryConjunctionInput = {
  operands?: InputMaybe<Array<InputMaybe<QueryExpressionInput>>>;
  operator?: InputMaybe<ConjunctionOperator>;
};

export type QueryEntityInput = {
  operator?: InputMaybe<QueryOperator>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type QueryExpressionInput = {
  conjunction?: InputMaybe<QueryConjunctionInput>;
  entity?: InputMaybe<QueryEntityInput>;
};

export enum QueryOperator {
  Equal = 'EQUAL',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
  LessOrEqual = 'LESS_OR_EQUAL',
  LessThan = 'LESS_THAN',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL'
}

export type RoleEntity = {
  __typename?: 'RoleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type TokenDto = {
  __typename?: 'TokenDto';
  access?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loginName?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  password?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
};

export type UserEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  loginName?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  password?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};

export type SaveUserMutationVariables = Exact<{
  fullname: Scalars['String'];
  loginName: Scalars['String'];
  password: Scalars['String'];
}>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUser?: { __typename?: 'UserEntity', id?: string | null, fullname?: string | null, loginName?: string | null, password?: string | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: { __typename?: 'PageableList_UserEntity', total: any, result?: Array<{ __typename?: 'UserEntity', id?: string | null, fullname?: string | null } | null> | null } | null };


export const SaveUserDocument = gql`
    mutation saveUser($fullname: String!, $loginName: String!, $password: String!) {
  saveUser(
    entity: {fullname: $fullname, loginName: $loginName, password: $password}
  ) {
    id
    fullname
    loginName
    password
  }
}
    `;
export type SaveUserMutationFn = Apollo.MutationFunction<SaveUserMutation, SaveUserMutationVariables>;

/**
 * __useSaveUserMutation__
 *
 * To run a mutation, you first call `useSaveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserMutation, { data, loading, error }] = useSaveUserMutation({
 *   variables: {
 *      fullname: // value for 'fullname'
 *      loginName: // value for 'loginName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSaveUserMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserMutation, SaveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserMutation, SaveUserMutationVariables>(SaveUserDocument, options);
      }
export type SaveUserMutationHookResult = ReturnType<typeof useSaveUserMutation>;
export type SaveUserMutationResult = Apollo.MutationResult<SaveUserMutation>;
export type SaveUserMutationOptions = Apollo.BaseMutationOptions<SaveUserMutation, SaveUserMutationVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    result {
      id
      fullname
    }
    total
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;