export default (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
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
        read_time: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'posts'
    });

    Post.associate = models => {
        Post.belongsTo(models.Author, {
            as: 'author'
        });
        Post.hasMany(models.Paragraph, {
            as: 'paragraphs'
        });
        Post.belongsTo(models.Analysis, {
            as: 'analysis'
        });
        Post.belongsToMany(models.Tag, {
            as: 'tags',
            through: 'post__tag'
        });
    };

    return Post
}