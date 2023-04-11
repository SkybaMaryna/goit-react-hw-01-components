import PropTypes from "prop-types";
import {StyledTransactionTable, StyledTransactionTableHead, StyledTransactionTableBody} from './TransactionHistory.styled'

const TransactionHistory = ({items}) => (
    <StyledTransactionTable>
  <StyledTransactionTableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </StyledTransactionTableHead>

  <StyledTransactionTableBody>
    {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
        </tr>

    ))}
  </StyledTransactionTableBody>
</StyledTransactionTable>
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
      })
    )
}

export default TransactionHistory;