import styled from '@emotion/styled'

export const ProfileCard = styled.div`
border: solid 1px #000;
padding: 20px;
background-color: #F5F5DC;
box-shadow: 0px 4px 4px rgba(95, 103, 117, 0.25);
`
export const UserDescription = styled.div`
text-align: center;
`
export const UserAvatar = styled.img`
`
export const UserName = styled.p`
font-weight: 800;
`
export const UserTag = styled.p`
font-size: 30px;
font-weight: 400;
color: gray;
`
export const UserLocation = styled.p`
font-size: 30px;
font-weight: 400;
color: gray;
`
export const StatsList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
text-align: center;
gap: 15px;
padding: 0;
`
export const StatsLabel = styled.span`
font-weight: 500;
`
export const StatsQuantity = styled.span`
font-size: 30px;
`