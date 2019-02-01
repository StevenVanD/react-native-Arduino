import { shallow } from 'enzyme';

const renderWrapper = component => shallow(component);

const shallowTester = (component, options = {}) => {
  if (component) {
    describe(`shallow test`, () => {
      it('should render without crashing', () => {
        renderWrapper(component);
      });

      if (!options.noSnapshot) {
        it('should match the snapshot', () => {
          const wrapper = renderWrapper(component);
          expect(wrapper).toMatchSnapshot();
        });
      }
    });
  } else {
    throw new Error('no component provided to the shallowTester');
  }
};

export default shallowTester;
