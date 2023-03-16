import PropTypes from 'prop-types';
import { StatisticsName, StatisticsPercentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <StatisticsName>{label}</StatisticsName>
      <StatisticsPercentage>{percentage}%</StatisticsPercentage>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
