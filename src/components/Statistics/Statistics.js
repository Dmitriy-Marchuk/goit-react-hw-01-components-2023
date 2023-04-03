import StatisticsElement from './StatisticsElement';
import { SectionStatistics, StatisticsList } from './Statistics.styled';
import { Title } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ data, title }) {
  return (
    <SectionStatistics>
      {title ? <Title>{title}</Title> : ''}
      <StatisticsList>
        {data.map(data => (
          <StatisticsElement
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </StatisticsList>
    </SectionStatistics>
  );
}

Statistics.Statistics = {
  data: PropTypes.array,
};
