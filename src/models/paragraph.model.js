export default (sequelize, DataTypes) => {
    const Paragraph = sequelize.define('Paragraph', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        html_tag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classes: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'paragraphs'
    });

    return Paragraph
}