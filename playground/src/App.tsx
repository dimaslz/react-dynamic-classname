import React, { FC, useState } from 'react';
import hljs from 'highlight.js';
// import { ReactDynamicClassName } from '@dimaslz/react-dynamic-classname';
import { ReactDynamicClassName } from '../../packages/react-dynamic-classname/src/ReactDynamicClassName';

import CodePresentationComponent from './components/code-presentation.component';
import copyToClipboard from './utils/copy-to-clipboard.utils';
import ReactLogo from './logo.svg';

import './App.css';

const exampleCodeByArrayString = `<ReactDynamicClassName>
  <h1 className={[
    { "class-a": true },
    { "class-b": false }
  ]}>
    Test dynamic React class like Vue
  </h1>
</ReactDynamicClassName>`;

const exampleCodeByObjectString = `<ReactDynamicClassName>
  <h1 className={{
    "class-a": false,
    "class-b": true
  }}>
    Test dynamic React class like Vue
  </h1>
</ReactDynamicClassName>`;

const exampleCodeByObjectArrayString = `<ReactDynamicClassName>
  <h1 className={[
    { "class-a": true, "class-b": false },
    [{ "class-c": true, "class-d": false }]
  ]}>
    Test dynamic React class like Vue
  </h1>
</ReactDynamicClassName>`;

const exampleCodeComponentAsChildrenString = `<ReactDynamicClassName>
	<div className="text-white">html element</div>
	<DummyComponent />
</ReactDynamicClassName>`;

const exampleCodeComponentAsChildrenString2 = `<ReactDynamicClassName>
	<div className="text-white">html element</div>
	<div>
		<div>
			<div className={[
				{ "class-a": true, "class-b": false },
				[{ "class-c": true, "class-d": false }]
			]}>something</div>
		</div>
	</div>
</ReactDynamicClassName>`;

export const App: FC = () => {
	const [copied, setCopied] = useState(false);
	const exampleCodeByArrayCode = hljs.highlight(
		exampleCodeByArrayString,
		{ language: 'typescript' },
	).value;
	const exampleCodeByObjectCode = hljs.highlight(
		exampleCodeByObjectString,
		{ language: 'typescript' },
	).value;
	const exampleCodeByObjectArrayCode = hljs.highlight(
		exampleCodeByObjectArrayString,
		{ language: 'typescript' },
	).value;
	const exampleCodeComponentAsChildrenCode = hljs.highlight(
		exampleCodeComponentAsChildrenString,
		{ language: 'typescript' },
	).value;
	const exampleCodeComponentAsChildrenCode2 = hljs.highlight(
		exampleCodeComponentAsChildrenString2,
		{ language: 'typescript' },
	).value;

	const onClickCommandExample = ($event: React.MouseEvent): void => {
		setCopied(() => true);

		const { target } = $event;

		if (target instanceof Element) {
			const value = target?.textContent as string;
			copyToClipboard(value.replace('$ ', ''));
		}

		setTimeout(() => {
			setCopied(() => false);
		}, 1000);
	};

	const DummyComponent = () => (
		<div className={JSON.stringify({ 'bg-yellow-500': true })}>
			<h1 className={JSON.stringify({ 'class-a': false, 'class-b': true })}>
				Test dynamic React class like Vue
			</h1>
		</div>
	);

	return (
		<div className="App">
			<div
				className="ForkMeOnGithub fixed top-0 right-0 mt-10 -mr-12 transform rotate-45 bg-gray-900 z-10"
			>
				<a
					href="https://github.com/dimaslz/react-dynamic-classname"
					target="_blank"
					className="flex text-gray-300 hover:text-gray-100 px-10 py-1 border border-white my-1 border-dashed"
					rel="noreferrer"
				>
          Fork me on GitHub
				</a>
			</div>

			<div className="Header flex flex-col items-center">
				<div>
					<img src={ReactLogo} alt="" className="w-96 h-96" />
				</div>
				<h1 className="text-6xl mb-6 dark:text-gray-200">react dynamic classname</h1>

				<div className="Header__install">
					<code
						className="dark:text-gray-900 text-gray-400 flex text-sm rounded shadow-inner cursor-pointer relative bg-gray-900 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100"
					>
						{copied && (
							<div
								className="p-4 rounded absolute inset-0 w-full h-full z-10 bg-green-600 text-white flex items-center justify-center"
							>
              command copied to clipboard
							</div>
						)}
						<div
							onClick={onClickCommandExample}
							className="rounded w-full h-full z-0 flex items-center justify-center p-4"
						>
              $ yarn add @dimaslz/react-dynamic-classname
						</div>
					</code>
				</div>
			</div>

			<div className="container my-0 mx-auto mt-20">
				{/*  */}
				<div className="flex justify-center w-full space-x-4">
					<div className="flex w-full">
						<CodePresentationComponent
							title="Code example (by array of object)"
							description="All components inside <code>ReactDynamicClassName</code> will have the attribute <code>className</code> for dynamic classes like <span class='text-green-500'>Vue</span>"
							snippets={[{ type: 'html', code: exampleCodeByArrayCode }]}
						/>
					</div>

					<div className="flex w-full">
						<div className="dark:bg-gray-900 bg-white rounded w-full">
							<div className="flex h-full flex-col">
								<h2 className="text-xl mb-2 dark:text-white text-gray-800">Code result</h2>
								<div className="rounded-lg dark:bg-gray-800 bg-gray-200 w-full h-full p-2">
									<ReactDynamicClassName>
										<h1 className={JSON.stringify({ 'class-a': true, 'class-b': false })}>
                      Test dynamic React class like Vue
										</h1>
									</ReactDynamicClassName>
								</div>

								<div className="text-xs mt-2 dark:text-white text-gray-800">
                  Here the result where is rendered the text in red according with the
									{' '}
									<code>class-a</code>
									{' '}
                  when is true.
								</div>
							</div>

						</div>
					</div>
				</div>

				{/*  */}
				<div className="flex justify-center w-full space-x-4 mt-10">
					<div className="flex w-full">
						<CodePresentationComponent
							title="Code example (by object)"
							description="All components inside <code>ReactDynamicClassName</code> will have the attribute <code>className</code> for dynamic classes like <span class='text-green-500'>Vue</span>"
							snippets={[{ type: 'html', code: exampleCodeByObjectCode }]}
						/>
					</div>

					<div className="flex w-full">
						<div className="dark:bg-gray-900 bg-white rounded w-full">
							<div className="flex h-full flex-col">
								<h2 className="text-xl mb-2 dark:text-white text-gray-800">Code result</h2>
								<div className="rounded-lg dark:bg-gray-800 bg-gray-200 w-full h-full p-2">
									<ReactDynamicClassName>
										<DummyComponent />
									</ReactDynamicClassName>
								</div>

								<div className="text-xs mt-2 dark:text-white text-gray-800">
                  Here the result where is rendered the text in red according with the
									{' '}
									<code>class-b</code>
									{' '}
                  when is true.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*  */}
				<div className="flex justify-center w-full space-x-4 mt-10">
					<div className="flex w-full">
						<CodePresentationComponent
							title="Code example (by array of arrays and objects)"
							description="All components inside <code>ReactDynamicClassName</code> will have the attribute <code>className</code> for dynamic classes like <span class='text-green-500'>Vue</span>"
							snippets={[{ type: 'html', code: exampleCodeByObjectArrayCode }]}
						/>
					</div>

					<div className="flex w-full">
						<div className="dark:bg-gray-900 bg-white rounded w-full">
							<div className="flex h-full flex-col">
								<h2 className="text-xl mb-2 dark:text-white text-gray-800">Code result</h2>
								<div className="rounded-lg dark:bg-gray-800 bg-gray-200 w-full h-full p-2">
									<ReactDynamicClassName>
										<h1 className={JSON.stringify([
											{ 'class-a': true, 'class-b': false },
											[{ 'class-c': true, 'class-d': false }],
										])}
										>
                      Test dynamic React class like Vue
										</h1>
									</ReactDynamicClassName>
								</div>

								<div className="text-xs mt-2 dark:text-white text-gray-800">
                  Here the result where is rendered the text in red according with the
									{' '}
									<code>class-a</code>
									{' '}
                  and
									{' '}
									<code>class-c</code>
									{' '}
                  when is true.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*  */}
				<div className="flex justify-center w-full space-x-4 mt-10">
					<div className="flex w-full">
						<CodePresentationComponent
							title="Code example with components as children"
							description="All components inside <code>ReactDynamicClassName</code> will have the attribute <code>className</code> for dynamic classes like <span class='text-green-500'>Vue</span> but can still use native <code>className</code>"
							snippets={[{ type: 'html', code: exampleCodeComponentAsChildrenCode }]}
						/>
					</div>

					<div className="flex w-full">
						<div className="dark:bg-gray-900 bg-white rounded w-full">
							<div className="flex h-full flex-col">
								<h2 className="text-xl mb-2 dark:text-white text-gray-800">Code result</h2>
								<div className="rounded-lg dark:bg-gray-800 bg-gray-200 w-full h-full p-2">
									<ReactDynamicClassName>
										<div className="text-white font-bold uppercase">html element</div>
										<DummyComponent  />
									</ReactDynamicClassName>
								</div>

								<div className="text-xs mt-2 dark:text-white text-gray-800">
                  Here the result where is rendered the common html element with native <code>className</code> and a component.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*  */}
				<div className="flex justify-center w-full space-x-4 mt-10">
					<div className="flex w-full">
						<CodePresentationComponent
							title="Code example with components as children"
							description="All components inside <code>ReactDynamicClassName</code> will have the attribute <code>className</code> for dynamic classes like <span class='text-green-500'>Vue</span> but can still use native <code>className</code>"
							snippets={[{ type: 'html', code: exampleCodeComponentAsChildrenCode2 }]}
						/>
					</div>

					<div className="flex w-full">
						<div className="dark:bg-gray-900 bg-white rounded w-full">
							<div className="flex h-full flex-col">
								<h2 className="text-xl mb-2 dark:text-white text-gray-800">Code result</h2>
								<div className="rounded-lg dark:bg-gray-800 bg-gray-200 w-full h-full p-2">
									<ReactDynamicClassName>
										<div className="text-white">html element</div>
										<div>
											<div>
												<div className={JSON.stringify([
													{ 'class-a': true, 'class-b': false },
													[{ 'class-c': true, 'class-d': false }],
												])}
												>something</div>
											</div>
										</div>
									</ReactDynamicClassName>
								</div>

								<div className="text-xs mt-2 dark:text-white text-gray-800">
                  Here the result where is rendered the common html element with native <code>className</code> and a component.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="relative mt-4 p-8 text-xs dark:text-white text-gray-800">
        Made with ♥ from Barcelona by
				{' '}
				<a href="https://twitter.com/dimaslz" className="text-blue-500 hover:text-blue-400">@dimaslz</a>
				{' '}
        to the
				{' '}
				<span className="text-blue-300 font-semibold">React</span>
				{' '}
        community |
				{' '}
				{ new Date().getFullYear() }
			</footer>
		</div>
	);
};

export default App;
