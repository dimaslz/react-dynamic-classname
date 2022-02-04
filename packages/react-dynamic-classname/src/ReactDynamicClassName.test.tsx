import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import ReactDynamicClassName from "./ReactDynamicClassName";

const Demo = ({ klass }: any) => (
  <ReactDynamicClassName>
    <div d-className={klass}>
      Hello World!
    </div>
  </ReactDynamicClassName>
);

describe("ReactDynamicClassName", () => {
  test("use correct class from an Array", () => {
    const { getByText } = render(<Demo klass={[{ "class-a": true }, { "class-b": false }]} />);
    const element = getByText("Hello World!");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("class-a");
  });

  test("use correct class from an Object", () => {
    const { getByText } = render(<Demo klass={{ "class-a": true, "class-b": false }} />);
    const element = getByText("Hello World!");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("class-a");
  });

  test("use correct class from an Object", () => {
    const { getByText } = render(<Demo klass={{ "class-a": true, "class-b": true }} />);
    const element = getByText("Hello World!");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("class-a class-b");
  });

  test("use correct class from an Object and Array", () => {
    const { getByText } = render(<Demo klass={[
      { "class-a": true, "class-b": false },
      [{ "class-c": true, "class-d": false }]
    ]} />);
    const element = getByText("Hello World!");
    expect(element).toBeInTheDocument();
    expect(element.className).toBe("class-a class-c");
  });
});
