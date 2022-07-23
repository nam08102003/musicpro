import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
};

const defaultProps = {
    children: null,
    name: undefined,
    value: undefined,
    disabled: false,
    checked: undefined,
};

const ButtonMode = ({ className, children, name, value, disabled, checked, ...props }) => {
    const classes = classNames('form-checkbox', className);

    return (
        <label className={classes}>
            <input
                {...props}
                type="checkbox"
                id="checkbox"
                className="checkbox"
                name={name}
                value={value}
                disabled={disabled}
                checked={checked}
            />
            {children}
        </label>
    );
};

ButtonMode.propTypes = propTypes;
ButtonMode.defaultProps = defaultProps;

export default ButtonMode;
