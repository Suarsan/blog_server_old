import { ApolloError } from "apollo-server";

export default {
    Query: {
        getPostTypes: async(_, args, { models }) => {

            const types = await models.Type.findAll();

            if (!(types.length > 0)) throw new ApolloError('Post types not found');

            return types;
        }
    },
    Mutation: {
        addPostType: async(_, args, { models }) => {

            const type = await models.Type.findOne({ where: { content: args.content } });
            if (type) throw new ApolloError('Post type already exists')

            const createdType = await models.Type.create({
                content: args.content
            });

            return createdType;
        }
    }
}