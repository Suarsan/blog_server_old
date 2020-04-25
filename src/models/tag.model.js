export default (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        content: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'tags'
    });

    Tag.associate = models => {
        Tag.belongsToMany(models.Post, {
            as: 'posts',
            through: 'post__tag'
        });
    }
    return Tag;
}