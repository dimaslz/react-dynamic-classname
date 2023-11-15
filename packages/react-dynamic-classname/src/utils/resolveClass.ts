export const resolveClass = (
	dynamicClass: string[] | object[] | object | string,
): string[] | object[] | object | string => {
	try {
		const classValue = typeof dynamicClass !== 'string' ? dynamicClass : JSON.parse(dynamicClass);

		if (Array.isArray(classValue)) {
			return classValue
				.map((c) => resolveClass(c))
				.join(' ')
				.trim();
		}

		if (typeof classValue === 'string') {
			return classValue;
		}

		return Object.entries(classValue)
			.map(([k, v]) => {
				if (v) return k;
			})
			.filter(Boolean)
			.join(' ');
	} catch (error) {
		return dynamicClass;
	}
};