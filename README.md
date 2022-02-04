# @dimaslz/react-dynamic-classname
React component to have a flexible className as Vue style but in React.

## Motivation
I like to create tools and small libraries and, this was an excuse to create a library in React. Other motivatin is, under my experience, as I have worked with Vue with dynamic classes, has a better flexibility to work with directly in the template and, it is something that I do when I work in React and I have to apply some conditionals in the `className`.

To clarify: I do saying that is better, just is a different way. For me sometimes it is useful.

## Installation

npm: `npm install @dimaslz/react-dynamic-classname`

yarn: `yarn add @dimaslz/react-dynamic-classname`

## Example

### Pure React
```tsx
// ...

export const App = () => {
	return (
		<TAG className={
			conditionTrue ? "class-a": "",
			conditionFalse ? "class-b": "",
			conditionTrue ? "class-c": "",
		}>
			Demo text
		</TAG>
	)
}

export default App
```

```html
<!-- will be rendered as: -->
<TAG class="class-a class-c">
	Demo text
</TAG>

```

### With this component
```tsx
import { ReactDynamicClass } from '@dimaslz/react-dynamic-classname';

export const App = () => {
	return (
		<ReactDynamicClassName>
			// ...
			<TAG d-className={{
				"class-a": true,
				"class-b": false,
				"class-c": true
			}}>
				Demo text
			</TAG>
			// ...
		</ReactDynamicClassName>
	)
}

export default App
```

```html
<!-- will be rendered as: -->
<TAG class="class-a class-c">
	Demo text
</TAG>

```

Live demo: [https://react-dynamic-classname.dimaslz.dev](https://react-dynamic-classname.dimaslz.dev)

## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```
