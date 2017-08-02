import { connect } from 'react-redux'
import React, { PropTypes } from 'react'

const DashboardContainer = ({
  welcomeMessage,
}) => (
  <div>
    <h1>{welcomeMessage}</h1>
  </div>
)

DashboardContainer.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  welcomeMessage: state.welcomeMessage,
})

// const mapDispatchToProps = dispatch => bindActionCreators(DashboardActions, dispatch)

export default connect(mapStateToProps)(DashboardContainer)
