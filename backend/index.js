const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

const corsOptions = {
  origin: ['https://comp3133a2-nritb5r3s-owenb-jngs-projects.vercel.app', 'http://localhost:4200'],
  credentials: true,
};

app.use(cors(corsOptions));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' }); // Use the correct GraphQL path

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

mongoose.connect('mongodb+srv://owenbeattie1:OwifQLmb9CLyvnWg@cluster0.f9qly4r.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));