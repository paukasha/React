/**
 * @jest-environment jsdom
 */

import { Dropdown } from '../Dropdown';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});


describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
    expect(wrapper).toBeDefined();
    console.log(window);
    // console.log(wrapper.find('div.container').debug());
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
    expect(wrapper).toMatchSnapshot();
  })
})