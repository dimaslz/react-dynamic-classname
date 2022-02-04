export const resolveClass = (
	dynamicClass: string[] | object[] | object | string,
): string[] | object[] | object | string => {
	if (Array.isArray(dynamicClass)) {
		return dynamicClass
			.map((c) => resolveClass(c))
			.join(' ')
			.trim();
	}

	if (typeof dynamicClass === 'string') {
		return dynamicClass;
	}

	return Object.entries(dynamicClass)
		.map(([k, v]) => {
			if (v) return k;
		})
		.filter(Boolean)
		.join(' ');
};