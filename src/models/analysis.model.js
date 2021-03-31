export default (sequelize, DataTypes) => {
    const Analysis = sequelize.define('Analysis', {
        score: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pros: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cons: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'analysis'
    });

    return Analysis;
}