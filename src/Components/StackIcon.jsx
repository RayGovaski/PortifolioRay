import './StackIcon.css';
import React from 'react';
import PropTypes from 'prop-types';


const StackIcon = ({ name, iconUrl }) => {
  return (
    <div className="stack-icon-wrapper">
      <div className="stack-icon-item">
        <img src={iconUrl} alt={name} className="stack-icon-image" />
        <small className="stack-icon-name">{name}</small>
      </div>
    </div>
  );
};

StackIcon.propTypes = {
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default StackIcon;