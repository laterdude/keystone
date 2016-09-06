import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import styles from './styles';

const classes = StyleSheet.create(styles);

function Center ({ className, component, height, style, ...props }) {
	const Component = component;

	props.className = css(classes.center, className);
	props.style = { height, ...style };

	return <Component {...props} />;
};
Center.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string,
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
};
Center.defaultProps = {
	component: 'div',
	height: 'auto',
};

module.exports = Center;
