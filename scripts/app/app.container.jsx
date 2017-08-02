import { connect } from 'react-redux'
import DashboardContainer from '../dashboard/dashboard.container'
import React from 'react'

const AppContainer = () => (
  <DashboardContainer />
)

export default connect()(AppContainer)
