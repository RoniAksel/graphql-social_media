const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const Post = require('./models/Post');
require('dotenv').config()


const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Mongo Connected`)
    return server.listen({ port: 5000 });
}).then((res) => {
    console.log(`Server running on ${res.url}`)
})


