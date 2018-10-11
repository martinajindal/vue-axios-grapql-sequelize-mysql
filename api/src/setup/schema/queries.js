// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as order from '../../modules/orders/query'


// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...order
  })
})

export default query