import {getDate} from './getDate';

describe('getDate function', () => {

	it('correct timestamp', () => {
		expect(getDate(1544356800000)).toBe('9 декабря, вс, 2018 год');
	}),

	it('timestamp is less then zero', () => {
		expect(getDate(-1544356800000)).toBe('23 января, вс, 1921 год');
	}),

	it('timestamp is not a integer', () => {
		expect(getDate('some string')).toContain('NaN');
	}),
	it('correct date mapping', () => {
		const date = new Date("Wed, 27 July 2016 13:30:00");
		expect(getDate(date.getTime())).toBe('27 июля, ср, 2016 год');
	})
});
