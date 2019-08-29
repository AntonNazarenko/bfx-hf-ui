export default () => ({
  label: 'Fill or Kill',
  customHelp: 'An FOK order is a limit order that must fully fill immediately or it is canceled (killed).',

  generateOrder: (data = {}, symbol, context) => {
    const { reduceonly, price, amount } = data

    return {
      type: context === 'm' ? 'FOK' : 'EXCHANGE FOK',
      price,
      amount,
      symbol,
      reduceonly,
    }
  },

  header: {
    component: 'ui.checkbox_group',
    fields: ['reduceonly'],
  },

  sections: [{
    title: '',
    name: 'general',
    rows: [
      ['price', 'amount'],
    ],
  }],

  fields: {
    reduceonly: {
      component: 'input.checkbox',
      label: 'REDUCE-ONLY',
      default: false,
    },

    price: {
      component: 'input.price',
      label: 'Price $QUOTE',
    },

    amount: {
      component: 'input.amount',
      label: 'Amount $BASE',
    },
  },

  actions: ['sell', 'buy'],
})
