import { ApolloError } from "apollo-server";
import { Op } from 'sequelize';
import { security } from '../utils/security.utils';

export default {
    Query: {
        getAuthors: async(_, args, { models }) => {

            const authors = await models.Author.findAll();

            if (!authors) throw new ApolloError('Authors not found')

            return authors;
        },
        signIn: async(_, args, { models }) => {
            console.dir('await security.hash(signInInput.password)');

            const signInInput = args.signInInput;

            const author = await models.Author.findOne({
                where: {
                    [Op.and]: [
                        { email: signInInput.email }
                    ]
                }
            });

            if (!author) throw new ApolloError('Authentication error', 401)
            if (!(await security.compareHash(signInInput.password, author.password))) throw new ApolloError('Authentication error', 401)

            const context = await models.Context.create({
                context: await security.hash(Math.random() + new Date() + author.email + author.password),
                author_id: author.id
            });

            author.context = context;

            return author;
        }
    },
    Mutation: {
        signUp: async(_, args, { models }) => {

            const signUpInput = args.signUpInput;

            const authors = await models.Author.findAll({
                where: { email: signUpInput.email }
            });

            if (authors.length > 0) throw new ApolloError('Author already exists')

            const author = await models.Author.create({
                email: signUpInput.email,
                password: await security.hash(signUpInput.password),
                firstname: signUpInput.firstname,
                lastname: signUpInput.lastname
            });

            return author;
        }
    }
}