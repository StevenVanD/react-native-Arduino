import React from 'react';
import { shallowTestHelper, eventChangeHelper } from '../../utils/test';
import Home from './Home';
import { shallow } from 'enzyme';
import { ListItem } from "../../components";


//const mockFn = jest.fn();
const component = <Home />;
const wrapper = shallow(<Home />);
//eventChangeHelper({ component, mockFn });
shallowTestHelper(component);
it("should display the order as a <ListItem />", () => {
  const element = wrapper
    .instance()
    .renderListItem();
  expect(element.type).toBe(ListItem);
});