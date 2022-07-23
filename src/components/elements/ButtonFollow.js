import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    content: PropTypes.string,
};
const defaultProps = {
    content: 'Follow',
};
const ButtonFollow = ({ className, content }) => {
    const classes = classNames('button-fl', className);
    return <div className={classes}>{content}</div>;
};

ButtonFollow.propTypes = propTypes;
ButtonFollow.defaultProps = defaultProps;

export default ButtonFollow;
