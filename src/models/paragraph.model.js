export default (sequelize, DataTypes) => {
    const Paragraph = sequelize.define('Paragraph', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        classes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'paragraph'
    });

    Paragraph.associate = models => {
        Paragraph.belongsTo(models.HtmlTag, {
            as: 'htmlTag',
            foreignKey: 'htmltag_id',
        })
    }

    return Paragraph;
}