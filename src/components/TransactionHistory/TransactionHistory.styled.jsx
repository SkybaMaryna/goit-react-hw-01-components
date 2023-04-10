import styled from '@emotion/styled'

export const TransactionTable = styled.table`
width: 1000px;
margin-bottom: 20px;
border: 1px solid #dddddd;
border-collapse: collapse;
`
export const TransactionTableHead = styled.thead`
font-weight: bold;
padding: 5px;
background: #efefef;
border: 1px solid #dddddd;
`
export const TransactionTableBody = styled.tbody`
padding: 5px 10px;
border: 1px solid #eee;
text-align: center;
font-size:30px;
& > tr:nth-child(even){
	background: #F7F7F7;}
`

