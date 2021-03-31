export default (sequelize, DataTypes) => {
    const Context = sequelize.define('Context', {
        context: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'context'
    });

    Context.associate = models => {
        Context.belongsTo(models.Author, {
            as: 'author',
            foreignKey: 'author_id'
        });
    };

    return Context;
}