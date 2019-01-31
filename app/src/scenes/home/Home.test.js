import React from 'react';
import { shallowTestHelper, eventChangeHelper } from '../../utils/test';
import Home from './Home';

const mockFn = jest.fn();
const component = <Home />;
//eventChangeHelper({ component, mockFn });
shallowTestHelper(component);