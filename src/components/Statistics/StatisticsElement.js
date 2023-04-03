import { StatisticsItem } from './StatisticsElement.styled';
import PropTypes from 'prop-types';

export default function StatisticsElement({ label, percentage }) {
  return (
    <StatisticsItem style={{ backgroundColor: getRandomHexColor() }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatisticsItem>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticsElement.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
