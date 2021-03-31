import { ApolloError } from "apollo-server";

export default {
    Query: {
        getTags: async(_, args, { models }) => {

            const tags = await models.Tag.findAll();

            if (!(tags.length > 0)) throw new ApolloError('Tags not found');

            return tags;
        }
    }
}