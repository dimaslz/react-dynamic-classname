import { PROP_NAME } from './constants';
import { condition } from './condition';
import { resolveClass } from './resolveClass';

export const getChildren: any = (child: any, attrName?: string) => {
	let { children } = child.props;

	if (Array.isArray(children)) {
		children = children
			.map((innerChild) => condition(innerChild, attrName))
			.filter(Boolean);
	} else {
		children = condition(children, attrName);
	}

	const className = child.props[attrName || PROP_NAME]
		? resolveClass(child.props[attrName || PROP_NAME])
		: child.props.className;

	child = {
		...child,
		props: {
			...child.props,
			className,
			children,
		},
	};

	// delete child.props[attrName || PROP_NAME];

	return child;
};