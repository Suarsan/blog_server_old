export default (sequelize, DataTypes) => {
    const Analysis = sequelize.define('Analysis', {
        score: {
            type: DataTypes.STRING,
            allowNull: false
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