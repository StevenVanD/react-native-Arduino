import React from 'react';
import { shallowTestHelper, eventChangeHelper } from '../../utils/test';
import ListItem from './ListItem';

const mockFn = jest.fn();
const component = <ListItem onPress={mockFn} />;
//eventChangeHelper({ component, mockFn });
shallowTestHelper(component);