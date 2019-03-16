const graphql = require('graphql');
const User = require('../models/user');
const Catt = require('../models/catt');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        avatarUrl: {type: GraphQLString},
        bgUrl: {type: GraphQLString},
        follows: {
            type: GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({_id: {$in: parent.follows}})
            }
        }
    })
});

const CattType = new GraphQLObjectType({
    name: 'Catt',
    fields: () => ({
        id: {type: GraphQLID},
        content: {type: GraphQLString},
        author: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return "Hello from server! :D"
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        catt: {
            type: CattType,
            args: { id: {type: GraphQLID}},
            resolve(parent, args) {
                return Catt.findById(args.id);
            }
        },
        catts: {
            type: GraphQLList(CattType),
            resolve(parent, args){
                return Catt.find({});
            }
        }
     }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                username: {type: GraphQLNonNull(GraphQLString)},
                avatarUrl: {type: GraphQLString},
                bgUrl: {type: GraphQLString},
                follows: {type: GraphQLList(GraphQLID)}
            },
            resolve(parent, args){
                let user = new User({
                    username: args.username,
                    avatarUrl: args.avatarUrl,
                    bgUrl: args.bgUrl,
                    follows: args.follows,
                });
                return user.save();
            }
        },
        addCatt: {
            type: CattType,
            args: {
                content: {type: GraphQLNonNull(GraphQLString)},
                userId: {type: GraphQLNonNull(GraphQLID)},
                imgUrl: {type: GraphQLString},
            },
            resolve(parent, args){
                let catt = new Catt({
                    content: args.content,
                    userId: args.userId,
                    imgUrl: args.imgUrl,
                });
                return catt.save();
            }
        }
        // addCatt: {
        //
        // }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
