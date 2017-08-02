import * as DashboardTypes from './dashboard.types'
import createReducer from '../helper/createReducer'

export const welcomeMessage = createReducer('Hello World!', {
  [DashboardTypes.SET_WELCOME]( state, action ) {
    return action.welcomeMessage
  },
})
