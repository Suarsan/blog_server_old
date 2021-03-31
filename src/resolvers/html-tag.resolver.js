import { Op } from 'sequelize';
import { ApolloError } from "apollo-server";

export default {
    Query: {
        getHtmlTags: async(_, args, { models }) => {
            const htmlTags = await models.HtmlTag.findAll();

            if (!(htmlTags.length > 0)) throw new ApolloError('Html tags not found');

            return htmlTags;
        }
    },
    Mutation: {
        addHtmlTag: async(_, args, { models }) => {

            const htmlTag = await models.HtmlTag.findOne({ where: { content: args.content } });

            if (htmlTag) throw new ApolloError('Html tag already exists')

            const createdHtmlTag = await models.HtmlTag.create({
                content: args.content
            });

            return createdHtmlTag;
        }
    }
}