const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const infoType = new GraphQLObjectType({
	name: 'nutritionInfo',
	fields: () => ({
		calories: { type: GraphQLInt },
		fat: { type: GraphQLInt },
		carb: { type: GraphQLInt },
		protein: { type: GraphQLInt }
	})
});

const ItemType = new GraphQLObjectType({
	name: 'Items',
	fields: () => ({
		id: { type: GraphQLString },
		dessert: { type: GraphQLString },
		nutritionInfo: { type: infoType }
	})
});

module.exports = ItemType;
