/* eslint-disable no-prototype-builtins */
import { PROP_NAME } from './constants';
import { getChildren } from './getChildren';

export const condition: any = (child: any, attrName?: string) => {
	if (Array.isArray(child)) {
		return child.map((c) => condition(c, attrName));
	}

	if (child.props?.hasOwnProperty(attrName || PROP_NAME)) {
		if (Boolean(child.props[attrName || PROP_NAME]) === false) {
			return null;
		}
	}

	if (child.props?.children) {
		child = getChildren(child, attrName);
	};

	return child;
};