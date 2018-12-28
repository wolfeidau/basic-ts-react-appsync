This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This is a basic react application with Typescript and AWS AppSync using the [aws-mobile-appsync-sdk-js](https://github.com/awslabs/aws-mobile-appsync-sdk-js).

In the project directory, you can run:

```
npm install
npm start
```

Currently this compiles fine with [npm](https://github.com/npm/cli) but fails to compile with [yarn](https://yarnpkg.com/en/).

To illustrate this checkout the `yarn` branch of this repo and run.

```
rm -rf node_modules
yarn install
yarn start
```

It fails with the following error.

```
Type error: Type 'AWSAppSyncClient<NormalizedCacheObject>' is not assignable to type 'ApolloClient<NormalizedCacheObject>'.
  Types of property 'mutate' are incompatible.
    Type '<T, TVariables = OperationVariables>(options: MutationOptions<T, TVariables>) => Promise<FetchResult<T, Record<string, any>>>' is not assignable to type '<T, TVariables = OperationVariables>(options: MutationOptions<T, TVariables>) => Promise<FetchResult<T, Record<string, any>, Record<string, any>>>'.
      Type 'Promise<FetchResult<T, Record<string, any>>>' is not assignable to type 'Promise<FetchResult<T, Record<string, any>, Record<string, any>>>'.
        Type 'FetchResult<T, Record<string, any>>' is not assignable to type 'FetchResult<T, Record<string, any>, Record<string, any>>'.
          Type 'FetchResult<T, Record<string, any>>' is not assignable to type 'ExecutionResult<T>'.
            Types of property 'errors' are incompatible.
              Type 'GraphQLError[] | undefined' is not assignable to type 'ReadonlyArray<GraphQLError> | undefined'.
                Type 'GraphQLError[]' is not assignable to type 'ReadonlyArray<GraphQLError>'.
                  Type 'import("/home/markw/Code/ts/basic-ts-react-appsync/node_modules/aws-appsync/node_modules/@types/graphql/error/GraphQLError").GraphQLError' is not assignable to type 'import("/home/markw/Code/ts/basic-ts-react-appsync/node_modules/@types/graphql/error/GraphQLError").GraphQLError'.
                    Property 'locations' is optional in type 'GraphQLError' but required in type 'GraphQLError'.  TS2322

    44 | 
    45 | const WithProvider = () => (
  > 46 |   <ApolloProvider client={client}>
       |                   ^
    47 |     <Rehydrated>
    48 |       <App />
    49 |     </Rehydrated>
```