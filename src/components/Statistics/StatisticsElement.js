import { StatisticsItem } from './StatisticsElement.styled';

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
