import React from 'react'

import OrderBookPanel from '../../components/OrderBookPanel'
import TradingStatePanel from '../../components/TradingStatePanel'
// import TVChart from '../../components/TVChart'
import OrderForm from '../../components/OrderForm'
import TradesTablePanel from '../../components/TradesTablePanel'
import StatusBar from '../../components/StatusBar'

import BitfinexOrders from '../../orders/bitfinex'
import BinanceOrders from '../../orders/binance'
import { propTypes, defaultProps } from './Trading.props'
import './style.css'

const orderDefinitions = {
  bitfinex: Object.values(BitfinexOrders).map(uiDef => uiDef()),
  binance: Object.values(BinanceOrders).map(uiDef => uiDef()),
}

export default class Trading extends React.PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const { onLogin, activeMarket } = this.props

    const commonComponentProps = {
      moveable: false,
      removeable: false,
      canChangeExchange: false,
      canChangeMarket: false,
      showExchange: false,
      showMarket: false,
    }

    return (
      <div className='hfui-tradingpage__wrapper'>
        <div className='hfui-tradingpage__inner'>
          <div className='hfui-tradingpage__column left'>
            <OrderForm
              orders={orderDefinitions}
              onLogin={onLogin}
              {...commonComponentProps}
            />

            <TradesTablePanel
              activeMarket={activeMarket}
              {...commonComponentProps}
            />
          </div>

          <div className='hfui-tradingpage__column center'>
            {/*
            <div className='hfui-tvchart__wrapper'>
              <TVChart containerID='__tvchart' />
            </div>
            */}

            <TradingStatePanel
              {...commonComponentProps}
            />
          </div>

          <div className='hfui-tradingpage__column right'>
            <OrderBookPanel
              canChangeStacked={false}
              {...commonComponentProps}
            />
          </div>
        </div>
        <StatusBar
          displayLayoutControls={false}
        />
      </div>
    )
  }
}
