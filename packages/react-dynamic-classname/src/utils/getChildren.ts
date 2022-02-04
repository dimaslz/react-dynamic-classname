import { PROP_NAME } from './constants';
import { condition } from './condition';
import { resolveClass } from './resolveClass';

export const getChildren: any = (child: any) => {
	let { children } = child.props;

	if (Array.isArray(children)) {
		children = children
			.map((innerChild) => condition(innerChild))
			.filter(Boolean);
	} else {
		children = condition(children);
	}
	child = {
		...child,
		props: {
			...child.props,
			className: child.props[PROP_NAME]
				? resolveClass(child.props[PROP_NAME])
				: undefined,
			children,
		},
	};

	delete child.props[PROP_NAME];

	return child;
};