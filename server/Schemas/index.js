const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
const itemData = require('../MOCK_DATA.json');

const ItemType = require('./TypeDefs/ItemType');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		getAllItems: {
			type: new GraphQLList(ItemType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				return itemData;
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createItem: {
			type: ItemType,
			args: {
				dessert: { type: GraphQLString }
			},
			resolve(parent, args) {
				itemData.push({
					id: itemData.length + 1,
					dessert: args.dessert
				});
				return args;
			}
		}
	}
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
