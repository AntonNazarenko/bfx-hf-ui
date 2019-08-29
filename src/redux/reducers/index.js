import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { REDUCER_PATHS } from '../config'

import ui from './ui'
import data from './data'
<<<<<<< HEAD
import socketHF from './ws-hf-server'
import editor from './editor'
import algoOrders from './algo-orders'
import appData from './app-data'

const reducers = optionalReducers => combineReducers({
  socketHF,
  data,
  algoOrders,
  editor,
  appData,
  ...optionalReducers,
=======
import bfxData from './bfx'
import meta from './meta'
import wsDTCServer from './ws_dtc_server'

const reducers = history => combineReducers({
  [REDUCER_PATHS.ROUTER]: connectRouter(history),
  [REDUCER_PATHS.WS_DTC_SERVER]: wsDTCServer,
  [REDUCER_PATHS.META]: meta,
  [REDUCER_PATHS.BFX_DATA]: bfxData,
  [REDUCER_PATHS.DATA]: data,
  [REDUCER_PATHS.UI]: ui,
>>>>>>> 73aae9a1a0f264ce758fd2e5a674b22535f1626a
})

export default reducers
