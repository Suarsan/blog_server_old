export default (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'author'
    });

    return Author;
}