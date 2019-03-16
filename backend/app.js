const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://user1:ZZQLuMDv5dOJEEmB@cluster0-jhmtv.mongodb.net/catter?retryWrites=true');
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4001, () =>{
    console.log('Listening on port 4001,')
});

