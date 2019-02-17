import { GraphQLResolveInfo } from 'graphql';
import { Context } from './models';
import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export default resolverMap;
