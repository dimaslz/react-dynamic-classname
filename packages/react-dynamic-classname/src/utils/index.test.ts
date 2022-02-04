import { PROP_NAME, condition } from './';

describe('Utils', () => {
	test('condition with Array example', () => {
		const child = {
			[PROP_NAME]: [{ 'class-a': true }, { 'class-b': false }],
			children: 'Hello World!',
		};

		expect(condition(child)).toStrictEqual({
			children: 'Hello World!',
			[PROP_NAME]: [{
				'class-a': true,
			}, {
				'class-b': false,
			}],
		});
	});

	test('condition with Object example', () => {
		const child = {
			[PROP_NAME]: { 'class-a': true, 'class-b': false },
			children: 'Hello World!',
		};

		expect(condition(child)).toStrictEqual({
			children: 'Hello World!',
			[PROP_NAME]: {
				'class-a': true,
				'class-b': false,
			},
		});
	});

	test('condition with Array of objects/array example', () => {
		const child = {
			[PROP_NAME]: [{ 'class-a': true,'class-b': false },[{ 'class-c': true,'class-d': false }]],
			children: 'Hello World!',
		};

		expect(condition(child)).toStrictEqual({
			children: 'Hello World!',
			[PROP_NAME]: [
				{
					'class-a': true,
					'class-b': false,
				},
				[{
					'class-c': true,
					'class-d': false,
				}],
			],
		});
	});
});