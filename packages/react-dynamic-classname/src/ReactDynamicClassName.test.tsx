import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import ReactDynamicClassName from './ReactDynamicClassName';
import { FC } from 'react';

type PROPS = {
	children?: any | null,
	klass?: string | object | string[] | object[]
}

const DummyComponent: FC<PROPS> = ({ klass }: PROPS) => (
	<div className={JSON.stringify(klass)}>
		<div className={JSON.stringify(klass)}>
			<h3 className={JSON.stringify(klass)}>
				Hello Dummy!
			</h3>
		</div>
	</div>
);

const Demo: FC<PROPS> = ({ klass, children = null }: PROPS) =>
	 (<ReactDynamicClassName>
		<h1 className={JSON.stringify(klass)}>
			{children || 'Hello World!'}
		</h1>
	</ReactDynamicClassName>)
;

describe('ReactDynamicClassName', () => {
	describe('Using html elements as children', () => {
		test('use correct class from an Array', () => {
			const { baseElement, getByText } = render(<Demo klass={[{ 'class-a': true }, { 'class-b': false }]} />);
			const element = getByText('Hello World!');
			expect(element).toBeInTheDocument();

			expect(baseElement).toMatchSnapshot();
		});

		test('use correct class from an Object', () => {
			const { baseElement, getByText } = render(<Demo klass={{ 'class-a': true, 'class-b': false }} />);
			const element = getByText('Hello World!');
			expect(element).toBeInTheDocument();

			expect(baseElement).toMatchSnapshot();
		});

		test('use correct class from an Object and Array', () => {
			const { baseElement, getByText } = render(
				<Demo
					klass={[
						{ 'class-a': true, 'class-b': false },
						[{ 'class-c': true, 'class-d': false }],
					]}
				/>);
			const element = getByText('Hello World!');
			expect(element).toBeInTheDocument();

			expect(baseElement).toMatchSnapshot();
		});
	});

	describe('Using components as children', () => {
		test('components as children with class as array of objects', () => {
			const { baseElement, getByText } = render(<Demo>
				<DummyComponent klass={[{ 'class-a': true }, { 'class-b': false }]} />
			</Demo>);

			const element = getByText('Hello Dummy!');
			expect(element).toBeInTheDocument();

			expect(baseElement).toMatchSnapshot();
		});

		test('use correct class from an Object', () => {
			const { baseElement, getByText } = render(<Demo>
				<DummyComponent klass={{ 'class-a': true, 'class-b': false }} />
			</Demo>);

			const element = getByText('Hello Dummy!');
			expect(element).toBeInTheDocument();

			expect(baseElement).toMatchSnapshot();
		});

		test('use correct class from an Object and Array', () => {
			const { baseElement, getByText } = render(<Demo>
				<DummyComponent klass={[
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				]}
				/>
			</Demo>);

			const element = getByText('Hello Dummy!');
			expect(element).toBeInTheDocument();

			expect(baseElement).toMatchSnapshot();
		});
	});

	describe('Using multiple components as children', () => {
		test('components as children with class as array of objects', () => {
			const { baseElement, getAllByText } = render(<Demo>
				<DummyComponent klass={[{ 'class-a': true }, { 'class-b': false }]} />
				<DummyComponent klass={[{ 'class-a': true }, { 'class-b': false }]} />
				<DummyComponent klass={[{ 'class-a': true }, { 'class-b': false }]} />
			</Demo>);

			const element = getAllByText('Hello Dummy!');
			expect(element).toHaveLength(3);

			expect(baseElement).toMatchSnapshot();
		});

		test('use correct class from an Object', () => {
			const { baseElement, getAllByText } = render(<Demo>
				<DummyComponent klass={{ 'class-a': true, 'class-b': false }} />
				<DummyComponent klass={{ 'class-a': true, 'class-b': false }} />
				<DummyComponent klass={{ 'class-a': true, 'class-b': false }} />
			</Demo>);

			const element = getAllByText('Hello Dummy!');
			expect(element).toHaveLength(3);

			expect(baseElement).toMatchSnapshot();
		});

		test('use correct class from an Object and Array', () => {
			const { baseElement, getAllByText } = render(<Demo>
				<DummyComponent klass={[
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				]}
				/>
				<DummyComponent klass={[
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				]}
				/>
				<DummyComponent klass={[
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				]}
				/>
			</Demo>);

			const element = getAllByText('Hello Dummy!');
			expect(element).toHaveLength(3);

			expect(baseElement).toMatchSnapshot();
		});
	});

	describe('Using multiple elements as children', () => {
		test('elements as children with class as objects', () => {
			const { baseElement } = render(<Demo>
				<div className={JSON.stringify({ 'class-a': true, 'class-b': false })}>example A</div>
				<div className={JSON.stringify({ 'class-a': true, 'class-b': false })}>example B</div>
				<div className={JSON.stringify({ 'class-a': true, 'class-b': false })}>example C</div>
			</Demo>);

			expect(baseElement).toMatchSnapshot();
		});

		test('elements as children with class as array of objects', () => {
			const { baseElement } = render(<Demo>
				<div className={JSON.stringify([{ 'class-a': true }, { 'class-b': false }])}>example A</div>
				<div className={JSON.stringify([{ 'class-a': true }, { 'class-b': false }])}>example B</div>
				<div className={JSON.stringify([{ 'class-a': true }, { 'class-b': false }])}>example C</div>
			</Demo>);

			expect(baseElement).toMatchSnapshot();
		});

		test('elements as children with class as Array and Object', () => {
			const { baseElement } = render(<Demo>
				<div className={JSON.stringify([
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				])}
				>example A</div>
				<div className={JSON.stringify([
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				])}
				>example B</div>
				<div className={JSON.stringify([
					{ 'class-a': true, 'class-b': false },
					[{ 'class-c': true, 'class-d': false }],
				])}
				>example C</div>
			</Demo>);

			expect(baseElement).toMatchSnapshot();
		});
	});

	describe('Dummy', () => {
		test('ClassName native', () => {
			const { baseElement } = render(<ReactDynamicClassName>
				<div className="class-a">example A</div>
			</ReactDynamicClassName>);

			expect(baseElement).toMatchSnapshot();
		});
	});
});
