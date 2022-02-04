export const PROP_NAME = "d-className";

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

export const resolveClass = (dynamicClass: {} | any[] | string): any => {
  if (Array.isArray(dynamicClass)) {
    return dynamicClass
      .map((c) => resolveClass(c))
      .join(" ")
      .trim();
  }

  if (typeof dynamicClass === "string") {
    return dynamicClass;
  }

  return Object.entries(dynamicClass)
    .map(([k, v]) => {
      if (v) return k;
    })
    .filter(Boolean)
    .join(' ');
};

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
      children
    }
  };

  delete child.props[PROP_NAME];

  return child;
};