// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
const OrderType = new GraphQLObjectType({
  name: 'order',
  description: 'order',

  fields: () => ({
    id: { type: GraphQLInt },
    matterRef: { type: GraphQLString },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
    createdAt: { type: GraphQLString }
  })
})

export { OrderType }