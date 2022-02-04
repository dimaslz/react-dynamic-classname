/* eslint-disable no-prototype-builtins */
import { PROP_NAME } from './constants';
import { getChildren } from './getChildren';

export const condition: any = (child: any) => {
	if (Array.isArray(child)) {
		return child.map((c) => condition(c));
	}

	if (child.props?.hasOwnProperty(PROP_NAME)) {
		if (Boolean(child.props[PROP_NAME]) === false) {
			return null;
		}
	}

	if (child.props?.children) child = getChildren(child);

	return child;
};