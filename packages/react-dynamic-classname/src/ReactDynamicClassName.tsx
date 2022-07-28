import { FC } from 'react';
import { condition  } from './utils';

const resolveChildren = (children: any) => {
	if ('children' in children?.props) {
		const propChildren = children.props.children;
		const childrenType = propChildren.type;
		if (typeof childrenType === 'function') {
			children = propChildren.type(propChildren.props);
		}
	}

	if (typeof children.type === 'function') {
		children = children.type(children.props);
	}

	if (children) {
		children = (
			Array.isArray(children) ? children : [children]
		)
			.map((child: any, index: any) => {
				child = {
					...child,
					key: index,
				};

				return condition(child);
			},
			);
	}

	return children;
};

export const ReactDynamicClassName: FC = ({
	children,
}: any) => {
	if (Array.isArray(children)) {
		return children.map((c: any) => resolveChildren(c));
	}

	if (Array.isArray(children.props.children)) {
		return children.props.children.map((c: any) => resolveChildren(c));
	}

	return resolveChildren(children);
};

export default ReactDynamicClassName;
