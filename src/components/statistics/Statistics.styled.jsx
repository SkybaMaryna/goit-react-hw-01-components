import styled from "@emotion/styled";

export const StyledSectionStat = styled.section`
    padding: 30px;
    width: 800px;
    border: solid 1px black;

`
export const StyledStatTitle = styled.h2`
   text-align: center;
   color: darkblue;
`
export const StyledStatList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 24px;
`
export const StyledStatItem = styled.li`
   display: flex;
   gap: 5px;
   flex-direction: column;
   width: 100%;
   padding: 10px;
   align-items: center;
   color: white;
   background-color: ${props => props.backGroundColor}
`
