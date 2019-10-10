import React from 'react';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Order from './Order.js';
import {fakeOrders} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component tests', () => {
	it('render order component', () => {
		const order = fakeOrders[0];
		const index = 0;
    	const wrapper = shallow(<Order key={index} order={order}/>);
    	expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('length of items match', () => {
		const order = fakeOrders[0];
		const index = 0;
    	const wrapper = shallow(<Order key={index} order={order}/>);
    	expect(wrapper.find('.Order-item')).toHaveLength(order.items.length)
	});
});