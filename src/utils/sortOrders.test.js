import React from 'react'
import {sortByItemCount, sortByItemNames, sortByDate, sortTypes, sortOrders} from './sortOrders';
import {fakeOrders} from '../mock/fakeOrders'

const isOrderObject = (testedFunc) => {
	const result = testedFunc('', '');
	expect(result).toBe(0);
};

const isOrderNull = (testedFunc) => {
	const result = testedFunc(null, null);
	expect(result).toBe(0);
};

const orderHasNoItems = (testedFunc) => {
	const order1 = {
			date: 154435680000,
		};

		const order2 = {
			date: 154435680000,
		};
	const result = testedFunc(order1, order2);
	expect(result).toBe(0);
};


describe('sortByItemCount function', () => {
	it('orders are not objects', () => {
		isOrderObject(sortByItemCount);
	});

	it('orders are null', () => {
		isOrderNull(sortByItemCount);
	});

	it('object has no items', () => {
		orderHasNoItems(sortByItemCount);
	})

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first has more items', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('second has more items', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are not objects', () => {
		isOrderObject(sortByDate);
	});

	it('orders are null', () => {
		isOrderNull(sortByDate);
	});

	it('object has no items', () => {
		orderHasNoItems(sortByDate);
	});

	it('same items count', () => {
		const order1 = {
			date: 154435680000,
		};

		const order2 = {
			date: 154435680000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first date is bigger', () => {
		const order1 = {
			date: 154435680000,
		};

		const order2 = {
			date: 154435580000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('second date is bigger', () => {
		const order1 = {
			date: 153435680000,
		};

		const order2 = {
			date: 154435680000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByItemNames function', () => {
	it('orders are not objects', () => {
		isOrderObject(sortByItemNames);
	});

	it('orders are null', () => {
		isOrderNull(sortByItemNames);
	});

	it('object has no items', () => {
		orderHasNoItems(sortByItemNames);
	});

	it('same items names', () => {
		const order1 = {
			items: [
			'Утиный пластмасса для показ новый год',
			'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			'Новый стиль один розница яйцо для упаковки форма латекс',
		]
		};

		const order2 = {
			items: [
			'Утиный пластмасса для показ новый год',
			'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			'Новый стиль один розница яйцо для упаковки форма латекс',
		]
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first items are bigger', () => {
		const order2 = {
			items: [
			'Утиный пластмасса для показ новый год',
			'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			'Новый стиль один розница яйцо для упаковки форма латекс',
		]
		};

		const order1 = {
			items: [
			'Жакет - BOREAL5',
			'Miss Gabby Костюм',
			'Ostin перчатки мужские',
			'Zara худи роз.',
		]
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('first items are less', () => {
		const order1 = {
			items: [
			'Утиный пластмасса для показ новый год',
			'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			'Новый стиль один розница яйцо для упаковки форма латекс',
		]
		};

		const order2 = {
			items: [
			'Жакет - BOREAL5',
			'Miss Gabby Костюм',
			'Ostin перчатки мужские',
			'Zara худи роз.',
		]
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

});

describe('sortOrders function', () => {
	it('orders has 0 length', () => {
		const result = sortOrders(null, sortTypes.DATE);
		expect(result).toBe(false);
	});

	it('orders is not array', () => {
		const result = sortOrders(90, sortTypes.DATE);
		expect(result).toBe(false);
	});

	it('orders is empty array', () => {
		const result = sortOrders([], sortTypes.DATE);
		expect(result).toBe(false);
	});

	it('orders is correct', () => {
		const result = sortOrders(fakeOrders, sortTypes.DATE);
		expect(result).toBe(true);
	});

	it('sort type is incorrect', () => {
		const result = sortOrders(fakeOrders, '');
		expect(result).toBe(false);
	});
});