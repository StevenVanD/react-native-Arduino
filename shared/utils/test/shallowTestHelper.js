import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const renderWrapper = component => shallow(component);

const shallowTester = component => {
  it('should render without crashing', () => {
    renderWrapper(component);
  });

  it('should match the snapshot', () => {
    const wrapper = renderWrapper(component);
    expect(wrapper).toMatchSnapshot();
  });
};

export default shallowTester;
