import Sequelize from 'sequelize';
import path from 'path';

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '../', 'db.json'))[env];

var sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: "postgres",
    define: {
        underscored: true,
    },
});

let db = {
    Post: sequelize.import('./post.model'),
    Author: sequelize.import('./author.model'),
    Paragraph: sequelize.import('./paragraph.model'),
    Analysis: sequelize.import('./analysis.model'),
    Tag: sequelize.import('./tag.model'),
};

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

export default db