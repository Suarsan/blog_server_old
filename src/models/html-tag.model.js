export default (sequelize, DataTypes) => {
    const HtmlTag = sequelize.define('HtmlTag', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'html-tag'
    });

    return HtmlTag;
}