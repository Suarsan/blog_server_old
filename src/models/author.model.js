export default (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'authors'
    });

    Author.associate = models => {
        Author.hasMany(models.Post, {
            as: 'posts'
        });
    };

    return Author;
}