import React from 'react';
import { shallow } from 'enzyme';
import { shallowTestHelper } from '../../utils/test';
import Home from './Home';
import { ListItem } from "../../components";


// const mockFn = jest.fn();
const component = <Home />;
const wrapper = shallow(<Home />);
// eventChangeHelper({ component, mockFn });
shallowTestHelper(component);
it("should display the order as a <ListItem />", () => {
  const element = wrapper
    .instance()
    .renderListItem();
  expect(element.type).toBe(ListItem);
});