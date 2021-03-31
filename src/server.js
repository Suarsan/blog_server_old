import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import models from './models'
import resolvers from './resolvers'
import typeDefs from './types'

const PORT = process.env.PORT || '5000';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const apollo = new ApolloServer({
    schema,
    context: {
        models
    },
    introspection: false,
    playground: false,
    connectToDevTools: true
});

models.sequelize.sync().then(() => {
    apollo.listen({ host: 'localhost', port: PORT }).then(({ url }) => {
        console.log(`Servidor corriendo en ${url}`);
    });
})