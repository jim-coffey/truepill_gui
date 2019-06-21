import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { ProductList } from './ProductList';

const HIDDEN = 0;
const VISIBLE = 1;

describe('ProductList', () => {
  const dfltProps = {
    dispatch: jest.fn(),
    products: [
      {
        product_current_count: 5,
        product_manual_count: 5,
        product_name: 'product1'
      },
      {
        product_current_count: 0,
        product_manual_count: 0,
        product_name: 'product2'
      }
    ]
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show each of the products passed as props', () => {
    const wrapper = shallow(<ProductList {...dfltProps} />);

    expect(wrapper.find('[data-automation-id="product-row"]').length).toEqual(2);
  });

  it('should not be showing an input for product1', () => {
    const wrapper = shallow(<ProductList {...dfltProps} />);

    expect(wrapper.find('[data-automation-id="input-product1"]').length).toEqual(HIDDEN);
  });

  it('should not be showing a reset stock button', () => {
    const wrapper = shallow(<ProductList {...dfltProps} />);

    expect(wrapper.find('[data-automation-id="reset-button"]').length).toEqual(HIDDEN);
  });

  it('should show an input for product1 when we click on product1 manual count', () => {
    const wrapper = shallow(<ProductList {...dfltProps} />);

    const manualCount = wrapper.find('[data-automation-id="text-product1"]');
    manualCount.simulate('click');

    expect(wrapper.find('[data-automation-id="input-product1"]').length).toEqual(VISIBLE);
  });

  it('should show a reset stock button when we click on product1 manual count', () => {
    const wrapper = shallow(<ProductList {...dfltProps} />);

    const manualCount = wrapper.find('[data-automation-id="text-product1"]');
    manualCount.simulate('click');

    expect(wrapper.find('[data-automation-id="reset-button"]').length).toEqual(VISIBLE);
  });

  it('should dispatch an action when the reset stock button is clicked', () => {
    const wrapper = shallow(<ProductList {...dfltProps} />);

    const manualCount = wrapper.find('[data-automation-id="text-product1"]');
    manualCount.simulate('click');
    const resetStock = wrapper.find('[data-automation-id="reset-button"]');
    resetStock.simulate('click');

    expect(dfltProps.dispatch).toHaveBeenCalledTimes(1);
  });
});
