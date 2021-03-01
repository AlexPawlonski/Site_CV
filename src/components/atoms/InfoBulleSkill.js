import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const InfoBulleSkill = ({data, ...props }) => {
  return(
    <div>
    <p>{data}</p>
  </div>
  )
};

InfoBulleSkill.propTypes = {
 
};
InfoBulleSkill.defaultProps = {
  
};
export default InfoBulleSkill;