import { ApolloError } from "apollo-server";
import { Op } from 'sequelize';

export default {
    Query: {
        getAuthors: (_, args, { models }) => {

            const authors = models.Author.findAll();
            if (!authors) throw new ApolloError('Authors not found')
            return authors;
        },
    },
    Mutation: {
        addAuthor: async(_, args, { models }) => {

            const authors = models.Author.findAll({ where: {
                    [Op.and]: [{ firstname: args.firstname }, { lastname: args.lastname }] } });

            if (authors.length > 0) throw new ApolloError('Author already exists')

            const author = await models.Author.create({
                firstname: args.firstname,
                lastname: args.lastname
            });

            return author;
        }
    }
}