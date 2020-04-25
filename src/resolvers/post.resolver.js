import { Op } from 'sequelize';
import { ApolloError } from "apollo-server";

export default {
    Query: {
        getPosts: (_, args, { models }) => {
            const posts = models.Post.findAll({
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs'
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }]
            });

            if (!(posts.length > 0)) throw new ApolloError('Posts not found');

            return posts;
        },
        getPostsByTag: (_, args, { models }) => {
            const posts = models.Post.findAll({
                where: {
                    tags: {
                        [Op.contains]: {
                            content: 'http://google.com'
                        }
                    }
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs'
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }]
            });

            return posts;
        },
        getPostBySlug: (_, args, { models }) => {
            return models.Post.findAll({
                where: {
                    slug: args.slug
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs'
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }]
            });
        }
    },
    Mutation: {
        addPost: async(_, args, { models }) => {

            const post = await models.Post.findOne({ where: { slug: args.slug } });
            if (post) throw new ApolloError('Slug already exists')

            const author = await models.Author.findOnes({ where: { id: args.authorId } });
            if (!author) throw new ApolloError('Author does not exists')

            const createdPost = await models.Post.build({
                slug: args.slug,
                title: args.title,
                image: args.image,
                read_time: args.read_time,
                type: args.type,
                authorId: args.authorId,
                analysis: args.analysis,
                paragraphs: args.paragraphs,
                tags: []
            }, {
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs'
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }]
            });

            for (const t of args.tags) {
                const tag = await models.Tag.findAll({ where: { content: t.content } });
                if (tag) {
                    existingTags.push(tag);
                } else {
                    post.tags.push(t);
                }
            };

            const newTags = [];
            const existingTags = [];

            return await a;
        }
    }
}