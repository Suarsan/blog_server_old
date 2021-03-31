export default (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'type'
    });

    return Type;
}