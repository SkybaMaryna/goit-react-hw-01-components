import PropTypes from "prop-types";
import { generateRandomBackground } from 'utils/randomColor'
import { StyledSectionStat, StyledStatTitle, StyledStatList, StyledStatItem } from "./Statistics.styled";

const Statistics = ({ title, stats }) => (
    <StyledSectionStat>
     {title && <StyledStatTitle>{title}</StyledStatTitle>}

    <StyledStatList> {
        stats.map(({id, label, percentage}) => (
            <StyledStatItem backGroundColor={generateRandomBackground()} key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
        </StyledStatItem>))}
    </StyledStatList>
</StyledSectionStat>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}

export default Statistics;