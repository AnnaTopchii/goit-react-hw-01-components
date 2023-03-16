import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsBlock,
  StatisticsBlockItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsBlock>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsBlockItem key={id}>
            <StatisticsItem label={label} percentage={percentage} />
          </StatisticsBlockItem>
        ))}
      </StatisticsBlock>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
