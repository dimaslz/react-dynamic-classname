import { FC } from 'react';
import { condition  } from './utils';

export const ReactDynamicClassName: FC = ({
	children,
}: any) => {
	if (children) {
		children = (
			Array.isArray(children) ? children : [children]
		)
			.map((child: any) => (
				condition(child)
			),
			);
	}

	return children;
};

export default ReactDynamicClassName;
