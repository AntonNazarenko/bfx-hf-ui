import PropTypes from 'prop-types'

export const propTypes = {
  onSelect: PropTypes.func,
  trades: PropTypes.array,
  rowData: propTypes.object,
}

export const defaultProps = {
  onSelect: () => {},
  trades: [],
}
