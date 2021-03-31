import { Op, DataTypes } from 'sequelize';
import { ApolloError } from "apollo-server";

export default {
    Query: {
        getPosts: async(_, args, { models }) => {
            const posts = await models.Post.findAll({
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Type,
                    as: 'type'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs',
                    include: [{
                        model: models.HtmlTag,
                        as: 'htmlTag'
                    }]
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }, {
                    model: models.Post,
                    as: 'parent'
                }, {
                    model: models.Post,
                    as: 'children'
                }],
                order: [
                    ['createdAt', 'DESC'],
                    [{ model: models.Paragraph, as: 'paragraphs' }, 'position', 'ASC'],
                ]
            });

            if (!(posts.length > 0)) throw new ApolloError('Posts not found');

            return posts;
        },
        getPostBySlug: async(_, args, { models }) => {

            const slug = args.slug;

            const post = await models.Post.findOne({
                where: {
                    slug: slug
                },
                include: [{
                        model: models.Author,
                        as: 'author'
                    }, {
                        model: models.Paragraph,
                        as: 'paragraphs',
                        include: [{
                            model: models.HtmlTag,
                            as: 'htmlTag',
                        }]
                    }, {
                        model: models.Type,
                        as: 'type'
                    }, {
                        model: models.Tag,
                        as: 'tags'
                    }, {
                        model: models.Analysis,
                        as: 'analysis'
                    },
                    {
                        model: models.Post,
                        as: 'parent'
                    },
                    {
                        model: models.Post,
                        as: 'children'
                    }
                ],
                order: [
                    [{ model: models.Paragraph, as: 'paragraphs' }, 'position', 'ASC']
                ]
            });

            let parent = null;
            if (post && post.parentId) {
                parent = await models.Post.findOne({
                    where: {
                        id: post.parentId
                    }
                });
            }
            if (parent) {
                const postJSON = post.toJSON()
                post.parent = parent.toJSON();
            }

            return post;
        },
        getEnabledPostBySlug: async(_, args, { models }) => {

            const slug = args.slug;

            const post = await models.Post.findOne({
                where: {
                    slug: slug,
                    enabled: true
                },
                include: [{
                        model: models.Author,
                        as: 'author'
                    }, {
                        model: models.Paragraph,
                        as: 'paragraphs',
                        include: [{
                            model: models.HtmlTag,
                            as: 'htmlTag',
                        }]
                    }, {
                        model: models.Type,
                        as: 'type'
                    }, {
                        model: models.Tag,
                        as: 'tags'
                    }, {
                        model: models.Analysis,
                        as: 'analysis'
                    },
                    {
                        model: models.Post,
                        as: 'parent'
                    },
                    {
                        model: models.Post,
                        as: 'children'
                    }
                ],
                order: [
                    [{ model: models.Paragraph, as: 'paragraphs' }, 'position', 'ASC']
                ]
            });

            let parent = null;
            if (post && post.parentId) {
                parent = await models.Post.findOne({
                    where: {
                        id: post.parentId
                    }
                });
            }
            if (parent) {
                const postJSON = post.toJSON()
                post.parent = parent.toJSON();
            }

            return post;
        },
        getPostsByParent: async(_, args, { models }) => {

            const parentId = args.parentId;

            const posts = await models.Post.findAll({
                where: {
                    parent_id: parentId,
                    enabled: true
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs',
                    include: [{
                        model: models.HtmlTag,
                        as: 'htmlTag',
                    }]
                }, {
                    model: models.Type,
                    as: 'type'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Post,
                    as: 'parent'
                }, {
                    model: models.Post,
                    as: 'children'
                }],
                order: [
                    [{ model: models.Paragraph, as: 'paragraphs' }, 'position', 'ASC']
                ]
            });

            return posts;
        },
        getPostsByAuthor: async(_, args, { models }) => {

            const firstname = args.firstname;
            const lastname = args.lastname;

            const author = await models.Author.findOne({
                firstname: firstname,
                lastname: lastname
            });

            if (!author) throw new ApolloError('Author doesnt exists')

            const posts = await models.Post.findAll({
                where: {
                    author_id: author.id,
                    type_id: 1,
                    enabled: true
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Type,
                    as: 'type'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs',
                    include: [{
                        model: models.HtmlTag,
                        as: 'htmlTag'
                    }]
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }, {
                    model: models.Post,
                    as: 'parent'
                }, {
                    model: models.Post,
                    as: 'children'
                }],
                order: [
                    ['createdAt', 'DESC'],
                    [{ model: models.Paragraph, as: 'paragraphs' }, 'position', 'ASC'],
                ]
            });

            if (!(posts.length > 0)) throw new ApolloError('Posts not found');

            return posts;
        },
        getPostsByType: async(_, args, { models }) => {

            const typeId = args.typeId;

            const posts = await models.Post.findAll({
                where: {
                    type_id: typeId,
                    enabled: true
                },
                include: [{
                        model: models.Author,
                        as: 'author'
                    }, {
                        model: models.Type,
                        as: 'type'
                    }, {
                        model: models.Paragraph,
                        as: 'paragraphs',
                        include: [{
                            model: models.HtmlTag,
                            as: 'htmlTag'
                        }]
                    }, {
                        model: models.Analysis,
                        as: 'analysis'
                    }, {
                        model: models.Tag,
                        as: 'tags'
                    },
                    {
                        model: models.Post,
                        as: 'parent'
                    }, {
                        model: models.Post,
                        as: 'children'
                    }
                ],
                order: [
                    ['createdAt', 'DESC'],
                    [{ model: models.Paragraph, as: 'paragraphs' }, 'position', 'ASC'],
                ]
            });

            if (!(posts.length > 0)) throw new ApolloError('Posts not found');

            return posts;
        },
        getPostsByTag: async(_, args, { models }) => {
            const tag = args.tag;

            const posts = (await models.Tag.findOne({
                where: {
                    content: tag
                },
                include: [{
                    model: models.Post,
                    as: 'posts',
                    include: [{
                        model: models.Author,
                        as: 'author'
                    }, {
                        model: models.Type,
                        as: 'type'
                    }, {
                        model: models.Paragraph,
                        as: 'paragraphs',
                        include: [{
                            model: models.HtmlTag,
                            as: 'htmlTag'
                        }]
                    }, {
                        model: models.Analysis,
                        as: 'analysis'
                    }, {
                        model: models.Tag,
                        as: 'tags'
                    }, {
                        model: models.Post,
                        as: 'parent'
                    }, {
                        model: models.Post,
                        as: 'children'
                    }]
                }],
                order: [
                    ['posts', 'createdAt', 'DESC'],
                    ['posts', 'paragraphs', 'position', 'ASC']
                ]
            })).posts;

            return posts;
        },
        getPostsByAnyTags: async(_, args, { models }) => {
            const tags = args.tags;

            const foundTags = await models.Tag.findAll({
                where: {
                    content: tags,
                    enabled: true
                },
                include: [{
                    model: models.Post,
                    as: 'posts',
                    include: [{
                        model: models.Author,
                        as: 'author'
                    }, {
                        model: models.Type,
                        as: 'type'
                    }, {
                        model: models.Paragraph,
                        as: 'paragraphs',
                        include: [{
                            model: models.HtmlTag,
                            as: 'htmlTag'
                        }]
                    }, {
                        model: models.Analysis,
                        as: 'analysis'
                    }, {
                        model: models.Tag,
                        as: 'tags'
                    }, {
                        model: models.Post,
                        as: 'parent'
                    }, {
                        model: models.Post,
                        as: 'children'
                    }]
                }],
                order: [
                    ['posts', 'createdAt', 'DESC'],
                    ['posts', 'paragraphs', 'position', 'ASC']
                ]
            });

            const posts = [];
            foundTags.forEach(t => t.posts.forEach(p => !posts.find(o => o.id === p.id) ? posts.push(p) : null));

            return posts;
        },
        getPostsByTags: async(_, args, { models }) => {
            const tags = args.tags;
            const unfilteredPosts = await models.Post.findAll({
                where: {
                    [Op.and]: [{
                        '$tags.content$': {
                            [Op.in]: tags
                        },
                        type_id: 1,
                        enabled: true
                    }]
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Type,
                    as: 'type'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs',
                    include: [{
                        model: models.HtmlTag,
                        as: 'htmlTag'
                    }]
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags',
                    required: true
                }, {
                    model: models.Post,
                    as: 'parent'
                }, {
                    model: models.Post,
                    as: 'children'
                }],
                order: [
                    ['createdAt', 'DESC'],
                    ['paragraphs', 'position', 'ASC']
                ]
            });

            const posts = unfilteredPosts.filter(p => (tags.length == p.tags.length) && tags.every((t) => p.tags.find(o => o.content === t)));

            return posts;
        },
        getPostsByScore: async(_, args, { models }) => {
            const posts = await models.Post.findAll({
                where: {
                    type_id: 1,
                    enabled: true
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Type,
                    as: 'type'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs',
                    include: [{
                        model: models.HtmlTag,
                        as: 'htmlTag'
                    }]
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }, {
                    model: models.Tag,
                    as: 'tags',
                    required: true
                }, {
                    model: models.Post,
                    as: 'parent'
                }, {
                    model: models.Post,
                    as: 'children'
                }],
                order: [
                    ['analysis', 'score', 'DESC']
                ]
            });

            return posts;
        }
    },
    Mutation: {
        addPost: async(_, args, { models }) => {

            const data = args.addPostInput;
            const context = await models.Context.findOne({
                where: {
                    context: data.context
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }]
            });

            const author = context.author;
            if (!context || !author) throw new ApolloError('Authentication error')

            const alreadyPosted = await models.Post.findOne({ where: { slug: data.slug } });
            if (alreadyPosted) throw new ApolloError('Slug already exists')

            console.dir(data);

            const post = await models.Post.create({
                slug: data.slug,
                title: data.title,
                metaTitle: data.metaTitle,
                metaDescription: data.metaDescription,
                image: data.image,
                readTime: data.readTime,
                type_id: data.type.id,
                author_id: author.id,
                parent_id: data.parentId,
            });

            if (data.tags) {
                data.tags.forEach(t => post.addTag(t.id));
            }
            if (data.categories) {
                data.categories.forEach(c => post.addCategory(c.id));
            }

            const paragraphs = [];
            if (data.paragraphs)  {
                data.paragraphs.forEach(
                    p => {
                        const paragraph = {
                            content: p.content,
                            classes: p.classes,
                            position: p.position,
                            htmltag_id: p.htmlTag.id,
                            post_id: post.id
                        };
                        paragraphs.push(paragraph);
                    }
                );
            }

            await models.Paragraph.bulkCreate(paragraphs);

            const analysis = await models.Analysis.create({
                score: data.analysis.score,
                pros: data.analysis.pros,
                cons: data.analysis.cons,
                post_id: post.id
            });
            const a = await models.Post.findOne({ where: { slug: data.slug } });

            return a;
        },
        updatePost: async(_, args, { models }) => {

            const data = args.updatePostInput;

            const context = await models.Context.findOne({
                where: {
                    context: data.context
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }]
            });

            const author = context.author;

            if (!context || !author) throw new ApolloError('Authentication error')

            const alreadyPosted = await models.Post.findOne({
                where: {
                    slug: data.slug
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }, {
                    model: models.Paragraph,
                    as: 'paragraphs',
                    include: [{
                        model: models.HtmlTag,
                        as: 'htmlTag',
                    }]
                }, {
                    model: models.Type,
                    as: 'type'
                }, {
                    model: models.Tag,
                    as: 'tags'
                }, {
                    model: models.Analysis,
                    as: 'analysis'
                }]
            });


            if (!alreadyPosted) throw new ApolloError('Post not found')

            const post = await alreadyPosted.update({
                slug: data.slug,
                title: data.title,
                metaTitle: data.metaTitle,
                metaDescription: data.metaDescription,
                image: data.image,
                readTime: data.readTime,
                type_id: data.type.id,
                author_id: author.id,
                parent_id: data.parentId
            });

            if (post.tags) {
                post.tags.forEach(t => post.removeTag(t));
            }
            if (data.tags) {
                data.tags.forEach(t => post.addTag(t.id));
            }

            await models.Paragraph.destroy({ where: { post_id: post.id } });
            const paragraphs = [];
            if (data.paragraphs) {
                data.paragraphs.forEach(
                    p => {
                        const paragraph = {
                            content: p.content,
                            classes: p.classes,
                            position: p.position,
                            htmltag_id: p.htmlTag.id,
                            post_id: post.id
                        };
                        paragraphs.push(paragraph);
                    }
                );
            }
            await models.Paragraph.bulkCreate(paragraphs);

            if (post.analysis) {
                await models.Analysis.destroy({ where: { id: post.analysis.id } });
                await models.Analysis.create({
                    score: data.analysis.score,
                    pros: data.analysis.pros,
                    cons: data.analysis.cons,
                    post_id: post.id
                });
            }

            return await models.Post.findOne({ where: { slug: data.slug } });
        },
        deletePost: async(_, args, { models }) => {
            const data = args.deletePostInput;

            const context = await models.Context.findOne({
                where: {
                    context: data.context
                },
                include: [{
                    model: models.Author,
                    as: 'author'
                }]
            });

            const author = context.author;

            if (!author) throw new ApolloError('Authentication error')

            const post = await models.Post.findOne({
                where: {
                    slug: data.slug
                },
                include: [{
                    model: models.Tag,
                    as: 'tags'
                }]
            });

            if (!post) throw new ApolloError('Post not found')

            post.tags.forEach(t => post.removeTag(t));
            await models.Paragraph.destroy({ where: { post_id: post.id } });
            await models.Analysis.destroy({ where: { post_id: post.id } });
            await models.Post.destroy({ where: { id: post.id } });

            return post;
        }
    }
}