import { shallow } from 'enzyme';

const getCorrectTimesLabel = numberOfTimes => (numberOfTimes === 1 ? 'time' : 'times');

/**
 * @param {object} data information about the desired test
 * @param {component} data.component The React component you would like to test
 * @param {component} [data.actionTriggerComponent=TouchableOpacity] The component that trigger the action
 * @param {string} [data.actionTriggerComponentPosition=0] The position of the component that triggers the action
 * @param {string} [data.testableEvent=press] The event to be tested
 * @param {function} data.mockFn The mockfunction that should be called by changing the testableEvent
 * @param {number} [data.timesCalled=1] The amount of times the mockFn should be called
 * @param {any} data.testableValue The value that changed during the event
 */
const genericEventChangeTester = data => {
  const { component, actionTriggerComponent = 'TouchableOpacity', actionTriggerComponentPosition = '0', testableEvent = 'press', mockFn, timesCalled = 1, testableValue } = data;

  if (component && actionTriggerComponent && mockFn) {
    describe(`Testing the ${testableEvent} event`, () => {
      it(`should call the mockFn ${timesCalled} ${getCorrectTimesLabel(timesCalled)} when the ${testableEvent} event is called.`, () => {
        const wrapper = shallow(component);
        let testable = wrapper.find(actionTriggerComponent).at(actionTriggerComponentPosition);

        // Hack for the connected TextInput
        if (actionTriggerComponent === 'TextInput') {
          testable = wrapper.find('Connect(TextInput)').at(actionTriggerComponentPosition);
        }

        testable.simulate(testableEvent, testableValue);
        expect(mockFn).toHaveBeenCalledTimes(timesCalled);
      });

      afterEach(() => {
        mockFn.mockClear();
      });
    });
  } else {
    throw new Error(`You didn't send all the correct data to use the eventChangeHelper, please check your params and try again.`);
  }
};

export default genericEventChangeTester;
