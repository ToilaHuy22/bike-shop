import React from 'react';

const Options = (props) => {
	return <div className="options">{props.children}</div>;
};

export const OptionsTitle = (props) => {
	return <div className="options__title">{props.children}</div>;
};

export const OptionsBody = (props) => {
	return <div className="options__body">{props.children}</div>;
};

export default Options;
