import { connect } from 'react-redux'

import WSDTCActions from '../../redux/actions/ws_dtc_server'
import UIActions from '../../redux/actions/ui'
import { getActiveMarket } from '../../redux/selectors/ui'

import HFUI from './HFUI'

const mapStateToProps = (state = {}) => ({
  activeMarket: getActiveMarket(state),
})

const mapDispatchToProps = dispatch => ({
  saveLayout: (layout, id) => {
    dispatch(UIActions.saveLayout(layout, id))
  },

  saveActiveMarket: (market) => {
    dispatch(UIActions.saveActiveMarket(market))
  },

  loginWithAuthToken: (authToken) => {
    dispatch(WSDTCActions.send(['auth.token', authToken]))
  },

  navigate: (route) => {
    dispatch(UIActions.setRoute(route))
  },

  getLastVersion() {
    dispatch(lastAppVersion())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HFUI)
