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
          <StatisticsBlockItem
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
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
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
