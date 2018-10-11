// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { OrderType } from './types'
import { getAll, getById } from './resolvers'

// All
export const getAllOrders = {
  type: new GraphQLList(OrderType),
  args: {},
  resolve: getAll
}

// By ID
export const order = {
  type: OrderType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

