import { condition  } from "./utils";

const ReactDynamicClassName = ({
  children,
}: any) => {
  if (children) {
    children = (
      Array.isArray(children) ? children : [children]
    )
      .map((child: any) => (
        condition(child)
      )
    );
  }

  return children;
};

export default ReactDynamicClassName;
