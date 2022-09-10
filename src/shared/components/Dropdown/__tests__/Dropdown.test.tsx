/**
 * @jest-environment jsdom
 */
import React from 'react'
import {shallow} from "enzyme";
import {Dropdown} from "../Dropdown";

describe('dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
    //  проверка на то что мы отрендирили компонент
    expect(wrapper).toBeDefined();
  //   проверим зарендерилась ли кнопка
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
    expect(wrapper).toMatchSnapshot()
  })
})
