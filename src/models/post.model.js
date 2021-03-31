export default (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        readTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'read_time'
        },
        metaTitle: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'meta_title'
        },
        metaDescription: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'meta_description'
        }
    }, {
        tableName: 'post'
    });

    Post.associate = models => {
        Post.belongsTo(models.Author, {
            as: 'author',
            foreignKey: 'author_id'
        });
        Post.hasMany(models.Paragraph, {
            as: 'paragraphs',
            foreignKey: 'post_id'
        });
        Post.belongsTo(models.Type, {
            as: 'type',
            foreignKey: 'type_id'
        });
        Post.hasOne(models.Analysis, {
            as: 'analysis',
            foreignKey: 'post_id'
        });
        Post.belongsToMany(models.Tag, {
            as: 'tags',
            through: 'post__tag',
            foreignKey: 'post_id'
        });
        Post.belongsTo(Post, {
            as: 'parent',
            foreignKey: 'parent_id'
        });
        Post.hasMany(Post, {
            as: 'children',
            foreignKey: 'parent_id'
        });
    };

    return Post
}