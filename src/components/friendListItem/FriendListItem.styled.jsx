import styled from '@emotion/styled'

export const StyledFriendCard = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 10px;
    border: solid 2px blueviolet;
    box-shadow: 4px 4px 8px 4px blueviolet;
    border-radius: 12px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`
export const StyledFriendImg = styled.img`
    display: block;
    height: 48px;
`

export const StyledFriendName = styled.p`
    font-size: 20px;
`
export const StyledFriendStatus = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.online ? "green" : "red"}
`

