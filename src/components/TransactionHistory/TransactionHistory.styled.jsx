import styled from '@emotion/styled'

export const StyledTransactionTable = styled.table`
width: 1000px;
margin-bottom: 20px;
border: 1px solid #dddddd;
border-collapse: collapse;
`
export const StyledTransactionTableHead = styled.thead`
font-weight: bold;
padding: 5px;
background: #efefef;
border: 1px solid #dddddd;
`
export const StyledTransactionTableBody = styled.tbody`
padding: 5px 10px;
border: 1px solid #eee;
text-align: center;
font-size:30px;
& > tr:nth-child(even){
	background: #F7F7F7;}
`

